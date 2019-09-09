import initialNotes from "../../assets/notes.json";

const load = key => {
  try {
    const localNotes = localStorage.getItem(key);
    return localNotes === null ? initialNotes : JSON.parse(localNotes);
  } catch (err) {
    console.error("Error: ", err);
  }
};

const save = (key, value) => {
  try {
    const noteValue = JSON.stringify(value);
    localStorage.setItem(key, noteValue);
  } catch (err) {
    console.error("Error: ", err);
  }
};

const remove = key => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error("Error: ", err);
  }
};

export default { load, save, remove };