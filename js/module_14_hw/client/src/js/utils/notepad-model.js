import {
  PRIORITY_TYPES
} from './constants';
import * as api from "../services/api";

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
  constructor(notes = []) {
    this._notes = notes;
  };

  get notes() {
    return this._notes;
  };

  async getNotes() {
    try {
      const getNotes = await api.getNotes();
      this._notes = await getNotes;
      return this._notes;
    } catch (error) {
      console.error(Error, "Error while getting my note");
    }
  }

  async saveNote(note) {
    try {
    /*
     * Сохраняет заметку в массив notes
     *
     * Принимает: объект заметки
     * Возвращает: сохраненную заметку
     *          */
    const savedNote = await api.saveNotes(note);
    this._notes.push(savedNote);
    return savedNote;
    } catch (error){
      console.log(Error, "error while saving my note")
    };
    };

  async findNoteById(id) {
    try {
      return await api.findNote(id).then(note => {
        return note = this._notes.find(note => note.id === id);
      });
    } catch(error) {
      console.log(Error, "error while finding my note id");
    }
    /*
     * Ищет заметку в массиве notes
     *
     * Принимает: идентификатор заметки
     * Возвращает: заметку с совпавшим полем id или undefined если ничего не найдено
     */
    
  };
  async updateNotePriority(id, NewPriority) {

    /*
     * Обновляет приоритет заметки
     *
     * Принимает: идентификатор заметки и ее новый приоритет
     * Возвращает: обновленную заметку
     */

  try {
    const updatedNote = await api.updateNotes(id, {priority: NewPriority});
      const findbById = this.findNoteById(id);
      if(findbById){
        findbById.priority = NewPriority;
        return updatedNote;
      };
  } catch(error) {
    console.log(Error, "error while updating note priority");
  }
  };

  async filterNotesByQuery(query = '') {
    /*
     * Фильтрует массив заметок по подстроке query.
     * Если значение query есть в заголовке или теле заметки - она подходит
     *
     * Принимает: подстроку для поиска в title и body заметки
     * Возвращает: новый массив заметок, контент которых содержит подстроку
     */
    try {
      const notes = await api.getNotes();
      const filteredNotes = notes.filter(note => {
        const queryLowerCase = query.toLowerCase();
        const titleLowerCase = note.title.toLowerCase();
        const bodyLowerCase = note.body.toLowerCase();
        return (
          titleLowerCase.includes(queryLowerCase) ||
          bodyLowerCase.includes(queryLowerCase)
        );
      });
      return filteredNotes;
    } catch (error) {
      console.error(Error, "error while filtering note query");
    }
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
  async updateNoteContent(id, updatedContent) {
    /*
     * Обновляет контент заметки
     * updatedContent - объект с полями вида {имя: значение, имя: значение}
     * Свойств в объекте updatedContent может быть произвольное количество
     *
     * Принимает: идентификатор заметки и объект, полями которого надо обновить заметку
     * Возвращает: обновленную заметку
     */
    try {return await api.updateNotes(id, updatedContent).then(updatedNote => {

      const findbById = this.findNoteById(id);
  
        if (findbById) {
          Object.assign(findbById, updatedNote);
          return updatedNote;
        }
  
    });
  } catch (error){
    console.error(Error, "error while updating note content");
    }
  };

  async deleteNote(id) {
    /*
     * Удаляет заметку по идентификатору из массива notes
     *
     * Принимает: идентификатор заметки
     * Возвращает: ничего
     */
    try {
      await api.deleteNotes(id);
      const deletedNote = this.findNoteById(id);
        if(deletedNote){
          this._notes = this._notes.filter(note => note.id !== id);
          return deletedNote;
        }
    } catch(error) {
      console.error(Error, "error while deleting note");
    };
  };
  
  async addItem(titleInput, bodyText) {
    try {
      const newItem = {
        title: titleInput,
        body: bodyText,
        priority: PRIORITY_TYPES.LOW
      };
      const savedNote = await api.saveNotes(newItem);
      this._notes.push(savedNote);
      return savedNote;
    } catch (error) {
      console.error(Error, "error while adding item");
    }
  }
};