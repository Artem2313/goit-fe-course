import './sass/main.scss';
import './assets/notes.json';
import './app';

//notepad Sample
const notepad = new Notepad(initialNotes);

//result function call 
renderNoteList(ref.ul, notepad.notes); 

// Event Listeners
ref.form.addEventListener('submit', addItem);
ref.ul.addEventListener('click', removeItem);
ref.search.addEventListener('input', searchForm);