import { ICON_TYPES, NOTE_ACTIONS } from './constants';

// Element with a tag and a class
const createElement = (tag, ...className) => {
    const createElement = document.createElement(tag);  
    createElement.classList.add(...className);  
    return createElement;  
    };   
  // Creating notes content
    const createNoteContent = (title, body) => {
      const noteContent = createElement('div', 'note__content');
      const noteTitle = createElement('h2', 'note__title');
      noteTitle.textContent = title;
      const noteBody = createElement('p', 'note__body');
      noteBody.textContent = body;
      noteContent.append(noteTitle, noteBody);
      return noteContent;
    }; 
  // Action buttons
    const createActionButton = (data, icon) => {
      const actionBtn = createElement('button', 'action');
      actionBtn.dataset.action = data;
      const actionIcon = createElement('i', 'material-icons');
      actionIcon.classList.add('action__icon');
      actionIcon.textContent = icon;
      actionBtn.appendChild(actionIcon);
      return actionBtn;
    };
  // Section with buttons
  const createSection = (btnOneUp, iconOne, btnTwoDn, iconTwo) => {
    const noteSection = createElement('secton', 'note__section');
    noteSection.append(
    createActionButton(btnOneUp, iconOne),
    createActionButton(btnTwoDn, iconTwo));
    return noteSection;
  } 
  // Footer
  const createNoteFooter = (priority) => {
    const footer = createElement('footer', 'note__footer');
    const notePriority = createElement('span', 'note__priority');  
     notePriority.textContent = `Priority: ${priority}`;
     const sectionOne = createSection(NOTE_ACTIONS.DECREASE_PRIORITY,
          ICON_TYPES.ARROW_DOWN,
          NOTE_ACTIONS.INCREASE_PRIORITY,
      ICON_TYPES.ARROW_UP); 
     const sectionTwo = createSection(NOTE_ACTIONS.EDIT,
      ICON_TYPES.EDIT,
      NOTE_ACTIONS.DELETE,
      ICON_TYPES.DELETE);
      
      sectionOne.appendChild(notePriority);
        footer.append(
          sectionOne,
          sectionTwo
      );
      return footer;
  };
  //List-item
  export const createListItem = (note) => {
      const noteListItem = createElement('li', 'note-list__item');
      noteListItem.dataset.id = note.id;
      const noteDiv = createElement('div', 'note');
      noteDiv.append(createNoteContent(note.title, note.body), createNoteFooter(note.priority));
      noteListItem.appendChild(noteDiv);
      return noteListItem;
  };
  //Rendering
  export const renderNoteList = (listRef, notes) => {
    
    const renderList = notes.map(note => createListItem(note));
    listRef.innerHTML = '';
    listRef.append(...renderList);
    
    };  