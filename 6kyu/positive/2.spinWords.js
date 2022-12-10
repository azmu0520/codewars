function spinWords(string) {
  var arr = string.split(' ');
  var res = [];
  arr.forEach((e) => {
    if (e.length >= 5) {
      res.push(e.split('').reverse().join(''));
    } else res.push(e);
  });
  return res.join(' ');
}

function spinWords(string) {
  return string
    .split(' ')
    .map((e) => (e.length >= 5 ? e.split('').reverse().join('') : e))
    .join(' ');
}

function spinWords(string) {
  return string.replace(/\w{5,}/g, function (w) {
    return w.split('').reverse().join('');
  });
}
