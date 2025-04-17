const model = {
  getStorageKey() {
    return document.getElementById("storageKey").value;
  },

  getStorageValue() {
    return document.getElementById("storageValue").value;
  },

  setItem(key, value) {
    localStorage.setItem(key, value);
  },

  removeItem(key) {
    localStorage.removeItem(key);
  },
};
