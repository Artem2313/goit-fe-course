import template from "../../template/notelist.hbs";

export const createListItem = note => {
  return template(note);
};

export const renderNoteList = (listRef, notes) => {
  const noteList = notes.map(note => createListItem(note));
  listRef.innerHTML = "";
  listRef.innerHTML = noteList.join("");
};