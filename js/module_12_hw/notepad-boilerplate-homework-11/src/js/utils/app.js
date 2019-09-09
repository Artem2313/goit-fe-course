import MicroModal from 'micromodal';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import Notepad from './notepad-model';
import {NOTE_ACTIONS, NOTIFICATION_MESSAGES} from './constants';
import {ref} from './ref';
import {renderNoteList, createListItem} from './view';
import Storage from "./localStorage";

//Notyf
const notyf = new Notyf();

// Notepadlocal storage
const loadNotes = Storage.load("notes");

//notepad Sample
const notepad = new Notepad(loadNotes);

//result function call 
renderNoteList(ref.ul, notepad.notes); 

// add item to list
const addItem = evt => {
  evt.preventDefault();
  const [input, text] = evt.target.elements;
  if(input.value.trim() === '' || text.value.trim() === '') {
    notyf.error(NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY);
    ref.form.reset();
    return;
  }
  const inputValue = input.value;
  const textValue = text.value;
  notepad
  .addItem(inputValue, textValue)
  .then(newItem => createListItem(newItem))
  .then(newNote => {
    ref.ul.insertAdjacentHTML("beforeend", newNote);
    Storage.save("notes", notepad.notes);
      Storage.remove("modalValue");
      ref.form.reset();
      MicroModal.close("note-editor-modal");
      notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
  })    
  .catch(error => {
    console.log(error);
  })
};

// delete note

const deleteListItem = el => {
  const liDelete = el.closest("li");
  const idLi = liDelete.dataset.id;
  notepad.deleteNote(idLi).then(notes => {
    Storage.save("notes", notes);
    liDelete.remove();
    notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
  });
};

// remove note
const removeListItem = evt => {
  if (evt.target.nodeName !== "I") return;
  const parentI = evt.target.parentNode.dataset.action;
  if (parentI === NOTE_ACTIONS.DELETE) {
    deleteListItem(evt.target);
  }
};

// search note
const searchForm = evt => {
  evt.preventDefault();
  notepad
    .filterNotesByQuery(evt.target.value)
    .then(filternotes => {
      renderNoteList(ref.ul, filternotes);
    })
    .catch(error => {
      console.log(error);
    });
};

// Micromodal handler

const handleOpenEditor = () => {
  MicroModal.show('note-editor-modal');

  const [input, text] = ref.form.elements;
  const modalValueLocal = localStorage.getItem("modalValue");
  const modalParse = JSON.parse(modalValueLocal);
  if (modalParse) {
    input.value = modalParse.inputValue;
    text.value = modalParse.textValue;
  }

};

// Input to local storage

const InputToLocalStorage = () => {
  const [input, text] = ref.form.elements;
  const modalValue = {
    inputValue: input.value,
    textValue: text.value
  };
  localStorage.setItem("modalValue", JSON.stringify(modalValue));
};

// Event Listeners
ref.form.addEventListener('submit', addItem);
ref.ul.addEventListener('click', removeListItem);
ref.search.addEventListener('input', searchForm);
ref.openEditorModalBtn.addEventListener('click', handleOpenEditor);
ref.form.addEventListener("input", InputToLocalStorage);