function storePreference(key, value) {
  localStorage.setItem(key, value);
}
function retrievePreference(key) {
  return localStorage.getItem(key);
}
