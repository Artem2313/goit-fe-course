import template from "../../template/list.hbs";

export const createListItem = note => {
  return template(note);
};

export const renderNoteList = (listRef, notes) => {
  const noteList = notes.map(note => createListItem(note));
  listRef.innerHTML = "";
  listRef.innerHTML = noteList.join("");
};