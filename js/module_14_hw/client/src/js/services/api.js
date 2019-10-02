import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export const getNotes = async () => {
  try {
    const getNotes = await axios.get("/notes");
    return getNotes.data;
  } catch (error) {
    throw new Error()('Error while fetching my getNotes');
  }
};

export const saveNotes = async note => {
  try {
    const postNote = await axios.post("/notes", note);
    return postNote.data;
  } catch (error) {
    throw new Error()('Error while fetching my saveNotes');
  }
};

export const deleteNotes = async id => {
  try {
    const removedNote = await axios.delete(`/notes/${id}`);
    return removedNote.data;
  } catch (error) {
    throw new Error()('Error while fetching my deleteNotes');
  }
};

export const updateNotes = async (id, updateText) => {
  try {
    const updateNote = await axios.patch(`/notes/${id}`, updateText);
    return updateNote.data;
  } catch (error) {
    throw new Error()('Error while fetching my updateNotes');
  }
};

export const findNote = async (id) => {
  try {
    const foundNote = axios.get(`/${id}`);
    return foundNote.data;
  } catch {
    throw new Error()('Error while fetching my findNote');
  }
}