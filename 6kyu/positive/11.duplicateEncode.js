function duplicateEncode(word) {
  // ...
  let arr = word.split('');
  let res = '';
  let char = '~!@#$%^&*()';
  arr.forEach((e) => {
    let reg = char.includes(e)
      ? new RegExp(`\\${e}`, 'gi')
      : new RegExp(e, 'gi');
    if (word.match(reg).length === 1) {
      res += '(';
    } else if (word.match(reg).length > 1) res += ')';
  });
  return res;
}

function duplicateEncode(word) {
  word = word.toLowerCase();
  return word.replace(/./g, (m) =>
    word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')'
  );
}
