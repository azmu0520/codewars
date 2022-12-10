function alphabetPosition(text) {
  var arr = text.match(/[a-z]/gi);
  if (!arr) return '';
  arr = arr && arr.join('').toLowerCase();
  var res = '';
  for (let i = 0; i < arr.length; i++) {
    res += `${arr[i].charCodeAt() - 96} `;
  }
  return res.trim();
}

let alphabetPosition = (text) =>
  text
    .toUpperCase()
    .replace(/[^A-Z]/g, '')
    .split('')
    .map((ch) => ch.charCodeAt(0) - 64)
    .join(' ');
