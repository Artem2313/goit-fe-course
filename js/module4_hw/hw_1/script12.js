// Создай объект notepad для работы с массивом заметок. 
// Каждая заметка это объект следующего формата:

// id: string | integer
// title: string
// body: string
// priority: integer [0-2]
// id - уникальный идентификатор объекта, 
// чтобы можно было найти его в коллекции, строка.
// title - заголовок заметки, строка.
// body - текст заметки, строка.
// priority - значение приоритета, от 0 (низкий) до 2 (высокий).
// Вот карта приоритетов, используй ее.

const Priority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};
// Напиши код для работы методов данного объекта.
// Model


const notepad = {
  notes: [],
  getNotes() {
    /*
     * Принимает: ничего
     * Возвращает: все заметки, значение свойства notes
     */

     return this.notes;
  },
  
  saveNote(note) {
    /*
     * Сохраняет заметку в массив notes
     *
     * Принимает: объект заметки
     * Возвращает: сохраненную заметку
     */
    this.notes.push(note);
  },

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
         }         
     }
  },

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
  },

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
  },

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

  },

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
  }, 

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
  }, 
};



// Далее идет код для проверки работоспособности объекта, 
// вставь его в конец скрипта. Твоя реализация методов объекта
//  notepad должна проходить этот тест.



/*
 * Добавляю 4 заметки и смотрю что получилось
 */
notepad.saveNote({
  id: 'id-1',
  title: 'JavaScript essentials',
  body:
    'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
  priority: Priority.HIGH,
});

notepad.saveNote({
  id: 'id-2',
  title: 'Refresh HTML and CSS',
  body:
    'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
  priority: Priority.NORMAL,
});

notepad.saveNote({
  id: 'id-3',
  title: 'Get comfy with Frontend frameworks',
  body:
    'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
  priority: Priority.NORMAL,
});

notepad.saveNote({
  id: 'id-4',
  title: 'Winter clothes',
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: Priority.LOW,
});

// Выполняется первый getNotes после создания SaveNotes//////

console.log('Все текущие заметки: ', notepad.getNotes());

/////////////////////////////////////////////////////////////



// Выполняем поиск по Id 

console.log(notepad.findNoteById('id-4'));

/////////////////////////////////////////////////////////////




// Выполняем смену приоритетов

/*
 * Зима уже близко, пора поднять приоритет на покупку одежды
 */
notepad.updateNotePriority('id-4', Priority.NORMAL);

console.log(
  'Заметки после обновления приоритета для id-4: ',
  notepad.getNotes(),
);

/*
 * Решил что фреймворки отложу немного, понижаю приоритет
 */
notepad.updateNotePriority('id-3', Priority.LOW);

console.log(
  'Заметки после обновления приоритета для id-3: ',
  notepad.getNotes(),
);

/////////////////////////////////////////////////////////////


// Фильтр по словам html

/*
 * Решил отфильтровать заметки по слову html
 */
console.log(
  'Отфильтровали заметки по ключевому слову "html": ',
  notepad.filterNotesByQuery('html'),
);


// -------------------------------------------------------------

// Фильтр по словам javascript

/*
 * Решил отфильтровать заметки по слову javascript
 */
console.log(
  'Отфильтровали заметки по ключевому слову "javascript": ',
  notepad.filterNotesByQuery('javascript'),
);

// -------------------------------------------------------------


// Фильтруем заметки по нормальному приоритету

/*
 * Хочу посмотреть только заметки с нормальным приоритетом
 */
console.log(
  'Отфильтровали заметки по нормальному приоритету: ',
  notepad.filterNotesByPriority(Priority.NORMAL),
);


// -------------------------------------------------------------




// Обновляем контент

/*
 * Обновим контент заметки с id-3
 */
notepad.updateNoteContent('id-3', {
  title: 'Get comfy with React.js or Vue.js',
});

console.log(
  'Заметки после обновления контента заметки с id-3: ',
  notepad.getNotes(),
);


// ----------------------------------------------







// Удалил id-2


/*
 * Повторил HTML и CSS, удаляю запись c id-2
 */
notepad.deleteNote('id-2');
console.log('Заметки после удаления с id -2: ', notepad.getNotes());


//-------------------------------------------------------------