export const LocalStorageGetItem = (key) => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key);
  }
  return null;
};

export const LocalStorageSetItem = (key, value) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, value);
  }
};

export const LocalStorageRemoveItem = (key) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
  }
};
