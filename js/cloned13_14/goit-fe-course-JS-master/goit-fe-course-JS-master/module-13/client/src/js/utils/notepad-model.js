import { PRIORITY_TYPES } from "./constants";
import * as api from "../services/api";

export default class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }
  get notes() {
    return api.getNotes();
  }
  findNoteById(id) {
    return this._notes.find(note => note.id === id);
  }
  saveNote(note) {
    this._notes.push(note);
    return note;
  }
  deleteNote(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        api
          .deleteNotes(id, URL)
          .then(notes => (this._notes = notes.filter(note => note.id !== id)));
        resolve(this._notes);
        reject("Error");
      }, 500);
    });
  }
  updateNoteContent(id, updatedContent) {
    let updateNew;
    let findIdIndex;
    const findId = this.findNoteById(id);
    if (findId.id === id) {
      findIdIndex = this.notes.indexOf(findId);
      updateNew = {
        ...findId,
        ...updatedContent
      };
      this._notes[findIdIndex] = updateNew;
    }
    return updateNew;
  }
  updateNotePriority(id, priority) {
    const findId = this.findNoteById(id);
    if (findId.id === id) {
      findId.priority = priority;
      return findId;
    }
  }
  filterNotesByQuery(query) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          this.notes().then(notes =>
            notes.filter(note => {
              const queryLowerCase = query.toLowerCase();
              const titleLowerCase = note.title.toLowerCase();
              const bodyLowerCase = note.body.toLowerCase();
              return (
                titleLowerCase.includes(queryLowerCase) ||
                bodyLowerCase.includes(queryLowerCase)
              );
            })
          )
        );
        reject("Error");
      }, 300);
    });
  }
  filterNotesByPriority(priority) {
    return this._notes.filter(note => (note.priority = priority));
  }
  addItem(titleInput, bodyText) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const newItem = {
          title: titleInput,
          body: bodyText,
          priority: PRIORITY_TYPES.LOW
        };
        api.saveNotes(newItem).then(newItem => {
          this._notes.push(newItem);
        });
        resolve(newItem);
        reject("Error");
      }, 500);
    });
  }
}
