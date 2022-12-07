function accum(s) {
  var arr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(`${s[i].toUpperCase()}${i ? s[i].toLowerCase().repeat(i) : ''}`);
  }
  return arr.join('-');
}
