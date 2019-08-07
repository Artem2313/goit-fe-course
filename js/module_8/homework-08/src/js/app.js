'use strict';
class Notepad {
  /*
   * Перенеси свойства и методы конструктора в класс
   *
   * Замени метод getNotes геттером, чтобы можно было обратиться как notepad.notes,
   * для этого создай свойство _notes, в котором храни массив заметок,
   * а геттер notes возвращает значение этого поля
   *
   * Добавь статическое свойство Priority используя ключевое слово static
   */
  constructor(notes = []){
      this._notes = notes;
  };

  static Priority = {
      LOW: 0,
      NORMAL: 1,
      HIGH: 2,
    };

  get notes() {
      return this._notes;
  };
  
  saveNote (note) {
      /*
       * Сохраняет заметку в массив notes
       *
       * Принимает: объект заметки
       * Возвращает: сохраненную заметку
       *          */        
      this._notes.push(note);
  };

  findNoteById(id) {
      /*
       * Ищет заметку в массиве notes
       *
       * Принимает: идентификатор заметки
       * Возвращает: заметку с совпавшим полем id или undefined если ничего не найдено
       */
       for(const note of this._notes) {
           if(note.id === id) {
               return note;
           };         
       }; 
  };

  updateNotePriority(id, priority) {
  
      /*
   * Обновляет приоритет заметки
   *
   * Принимает: идентификатор заметки и ее новый приоритет
   * Возвращает: обновленную заметку
   */

   const note = this.findNoteById(id);


   if(!note) return;

   note.priority = priority;
  };

  filterNotesByQuery(query = '') {
      /*
       * Фильтрует массив заметок по подстроке query.
       * Если значение query есть в заголовке или теле заметки - она подходит
       *
       * Принимает: подстроку для поиска в title и body заметки
       * Возвращает: новый массив заметок, контент которых содержит подстроку
       */
          const filteredNotes = [];
          
          for(const note of this.notes) {
              const hasQueryInTitle = note.title
              .toLowerCase()
              .includes(query.toLowerCase());
  
              const hasQueryInBody = note.body
              .toLowerCase()
              .includes(query.toLowerCase());
  
              if(hasQueryInTitle || hasQueryInBody) {
                  filteredNotes.push(note);
              }            
          }
          return filteredNotes; 
    };

    filterNotesByPriority(priority) {
      /*
       * Фильтрует массив заметок по значению приоритета
       * Если значение priority совпадает с приоритетом заметки - она подходит
       *
       * Принимает: приоритет для поиска в свойстве priority заметки
       * Возвращает: новый массив заметок с подходящим приоритетом
       */    
      const filteredNotes = [];   
      for(const note of this.notes) {
          const hasPriority = note.priority;
  
          if(hasPriority) {
              filteredNotes.push(note);
          };
          return filteredNotes;
      }    
  
    };

    updateNoteContent(id, updatedContent) {
      /*
       * Обновляет контент заметки
       * updatedContent - объект с полями вида {имя: значение, имя: значение}
       * Свойств в объекте updatedContent может быть произвольное количество
       *
       * Принимает: идентификатор заметки и объект, полями которого надо обновить заметку
       * Возвращает: обновленную заметку
       */
      let newUpdate;
		  let findIdIndex;
		  const findId = this.findNoteById(id);
		  if (findId.id === id) {
			findIdIndex = this.notes.indexOf(findId);
			newUpdate = {
				...findId,
				...updatedContent
			};
			this._notes[findIdIndex] = newUpdate;
		  }
		  return newUpdate;
    };


    deleteNote(id) {
      /*
       * Удаляет заметку по идентификатору из массива notes
       *
       * Принимает: идентификатор заметки
       * Возвращает: ничего
       */
      const foundId = this.findNoteById(id);
      if (foundId.id === id) {
        this._notes.splice(this._notes.indexOf(foundId), 1)
      }
    };

}
//priority types obj
const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};
//icon types obj
const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};
//action buttons obj
const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};
// initial notes obj
const initialNotes = [
  {
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body:
      'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-4',
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  },
];
//Coding starts here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//notepad Sample
const notepad = new Notepad(initialNotes);
// referrences
const ref = {
  
  ul: document.querySelector('.note-list'),
  
  };
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
  noteSection.append(createActionButton(btnOneUp, iconOne), createActionButton(btnTwoDn, iconTwo));
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
const createListItem = (note) => {
	const noteListItem = createElement('li', 'note-list__item');
	noteListItem.dataset.id = note.id;
	const noteDiv = createElement('div', 'note');
	noteDiv.append(createNoteContent(note.title, note.body), createNoteFooter(note.priority));
	noteListItem.appendChild(noteDiv);
	return noteListItem;
};
//Rendering
const renderNoteList = (listRef, notes) => {
  
  const renderList = notes.map(note => createListItem(note));
  
  listRef.append(...renderList);
  
  };  
//result function call 
renderNoteList(ref.ul, notepad.notes); 


