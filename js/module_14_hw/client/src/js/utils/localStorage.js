const remove = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error while removing item: ", err);
  }
};

export default { remove };