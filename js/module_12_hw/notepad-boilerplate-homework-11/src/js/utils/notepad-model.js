import { PRIORITY_TYPES } from './constants';
import shortid from 'shortid';

export default class Notepad {
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
        return note;
    };
    findNoteById(id) {
        /*
         * Ищет заметку в массиве notes
         *
         * Принимает: идентификатор заметки
         * Возвращает: заметку с совпавшим полем id или undefined если ничего не найдено
         */
        return this._notes.find(note => note.id === id);
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
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(
              this._notes.filter(note => {
                const queryLowerCase = query.toLowerCase();
                const titleLowerCase = note.title.toLowerCase();
                const bodyLowerCase = note.body.toLowerCase();
                return (
                  titleLowerCase.includes(queryLowerCase) ||
                  bodyLowerCase.includes(queryLowerCase)
                );
              })
            );
            reject("Error");
          }, 300);
        });
      };
      filterNotesByPriority(priority) {
        /*
         * Фильтрует массив заметок по значению приоритета
         * Если значение priority совпадает с приоритетом заметки - она подходит
         *
         * Принимает: приоритет для поиска в свойстве priority заметки
         * Возвращает: новый массив заметок с подходящим приоритетом
         */    
        return this._notes.filter(note => (note.priority = priority));    
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
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this._notes = this._notes.filter(note => note.id !== id);
            resolve(this._notes);
            reject("Error");
          }, 500);
        });
      };
    addItem(titleInput, bodyText) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const newItem = {
            id: shortid.generate(),
            title: titleInput,
            body: bodyText,
            priority: PRIORITY_TYPES.LOW
          };
          this._notes.push(newItem);
          resolve(newItem);
          reject("Error");
        }, 500);
      });
      }
  };