import MicroModal from 'micromodal';
import { Notyf } from 'notyf';
import Notepad from './notepad-model';
import initialNotes from '../../assets/notes.json';
import {NOTE_ACTIONS, NOTIFICATION_MESSAGES} from './constants';
import {ref} from './ref';
import {renderNoteList, createListItem} from './view';
import 'notyf/notyf.min.css';
import test from '../../template/list.hbs'





//notepad Sample
const notepad = new Notepad(initialNotes);

//Notyf
const notyf = new Notyf();

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
  const item = notepad.addItem(inputValue, textValue);
  notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
  MicroModal.close('note-editor-modal');
  const renderItem = createListItem(item);
  ref.ul.append(renderItem);
  ref.form.reset();  
};
// delete note
const removeItem = evt => {
  const parentOfItemToDelete = evt.target.parentNode.dataset.action;
  if(parentOfItemToDelete === NOTE_ACTIONS.DELETE)  {
    const itemDelete = evt.target.closest('li');
    itemDelete.remove();
    notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
  }
}
// search note
const searchForm = evt => { 
  evt.preventDefault();
  const findNotes = notepad.filterNotesByQuery(evt.target.value);
  renderNoteList(ref.ul, findNotes); 
};

const handleOpenEditor = () => {
  MicroModal.show('note-editor-modal');
}
// Event Listeners
ref.form.addEventListener('submit', addItem);
ref.ul.addEventListener('click', removeItem);
ref.search.addEventListener('input', searchForm);
ref.openEditorModalBtn.addEventListener('click', handleOpenEditor);


console.log(test);