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

       for(const note of this.notes) {
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
      const note = this.findNoteById(id);
  
      if(!note) return;
  
      note[updatedContent.title] = updatedContent.title;
    };


    deleteNote(id) {
      /*
       * Удаляет заметку по идентификатору из массива notes
       *
       * Принимает: идентификатор заметки
       * Возвращает: ничего
       */
      for(let i = 0; i < this.notes.length; i += 1) {
          const note = this.notes[i];
  
          if(note.id === id) {
              this.notes.splice(i, 1);
              return;
          }
      }
    };

}

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};

const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

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


const notepad = new Notepad(initialNotes);


const createElement = (tag, ...className) => {

  const createElement = document.createElement(tag);
  
  createElement.classList.add(...className);
  
  return createElement;
  
  };
  
   
  
  const ref = {
  
  ul: document.querySelector('.note-list'),
  
  };
  
   
  
  const createListItem = note => {
  
  const listItem = createElement('li', 'note-list__item');

  listItem.dataset.id = note.id;
  
  const notes = createElement('div', 'note');
  
  //title
  
  const noteContent = createElement('div', 'note__content');
  
  const title = createElement('h2', 'note__title');
  
  title.textContent = note.title;
  
  //body
  
  const body = createElement('p', 'note__body');
  
  body.textContent = note.body;
  
  noteContent.append(title, body);
  
  notes.append(noteContent);
  
  listItem.append(notes);

  //footer

  const footer = createElement('div', 'note__footer');

  notes.append(footer);  

  //footer_section 1

  const footerSection = createElement('section', 'note__section');

  footer.append(footerSection);

  //buttons.....



  //decrease button

  const decreasePriorityButton = createElement('button', 'action');
  decreasePriorityButton.dataset.action = NOTE_ACTIONS.DECREASE_PRIORITY

  footerSection.append(decreasePriorityButton);

  const iDecreasePriorityButton = createElement('i', 'material-icons', 'action__icon');
  
  iDecreasePriorityButton.textContent = ICON_TYPES.ARROW_DOWN;

  decreasePriorityButton.append(iDecreasePriorityButton);


  //increase button
  
  
  const increasePriorityButton = createElement('button', 'action');
  increasePriorityButton.dataset.action = NOTE_ACTIONS.INCREASE_PRIORITY

  footerSection.append(increasePriorityButton);

  const iIncreasePriorityButton = createElement('i', 'material-icons', 'action__icon');
  
  iIncreasePriorityButton.textContent = ICON_TYPES.ARROW_UP;

  increasePriorityButton.append(iIncreasePriorityButton);

  

  const notePriority = createElement('span', 'note__priority');
  
   notePriority.textContent = `Priority: ${note.priority}` 
   footerSection.append(notePriority);

   //footer_section 2

  const footerSection2 = createElement('section', 'note__section');

  footer.append(footerSection2);

  // edit-button

  const editButton = createElement('button', 'action');
  editButton.dataset.action = NOTE_ACTIONS.EDIT

  footerSection2.append(editButton);

  const iEdit = createElement('i', 'material-icons', 'action__icon');
  
  iEdit.textContent = ICON_TYPES.EDIT;

  editButton.append(iEdit);
  
  // delete-button

  const deleteButton = createElement('button', 'action');
  deleteButton.dataset.action = NOTE_ACTIONS.DELETE

  footerSection2.append(deleteButton);

  const iDelete = createElement('i', 'material-icons', 'action__icon');
  
  iDelete.textContent = ICON_TYPES.DELETE;

  deleteButton.append(iDelete);
  
  // finish
  
  return listItem;
  
  }; 
  
   
  
  const renderNoteList = (listRef, notes) => {
  
  const renderList = notes.map(elem => createListItem(elem));
  
  listRef.append(...renderList);
  
  };
  
   
  
  renderNoteList(ref.ul, notepad.notes); 


