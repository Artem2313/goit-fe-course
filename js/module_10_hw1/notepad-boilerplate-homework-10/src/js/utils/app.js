import { Notyf } from 'notyf';
import Notepad from './notepad-model';
import initialNotes from '../../assets/notes.json';
import {NOTE_ACTIONS} from './constants';
import {ref} from './ref';
import {renderNoteList, createListItem} from './view';
import 'notyf/notyf.min.css';

//Notyf
const notyf = new Notyf();

//notepad Sample
const notepad = new Notepad(initialNotes);

//result function call 
renderNoteList(ref.ul, notepad.notes); 
// add item to list
const addItem = evt => {
  evt.preventDefault();
  const [input, text] = evt.target.elements;
  if(input.value.trim() === '' || text.value.trim() === '') {
    notyf.error('Do not leave empty spaces!');
    ref.form.reset();
    return;
  }
  const inputValue = input.value;
  const textValue = text.value;
  const item = notepad.addItem(inputValue, textValue);
  notyf.success('New note added!')
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
    notyf.success('Succcessfully Deleted!');
  }
}
// search note
const searchForm = evt => {
  const findNotes = notepad.filterNotesByQuery(evt.target.value);
  renderNoteList(ref.ul, findNotes); 
};
// Event Listeners
ref.form.addEventListener('submit', addItem);
ref.ul.addEventListener('click', removeItem);
ref.search.addEventListener('input', searchForm);