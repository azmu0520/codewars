function isIsogram(str) {
  return Array.from(new Set(str.toLowerCase())).join('') === str.toLowerCase();
}
