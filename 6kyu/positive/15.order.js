function order(words) {
  var res = words.split(' ');
  res = res.sort((a, b) => {
    let bir = a.split('').sort()[0];
    let ikki = b.split('').sort()[0];
    return bir - ikki;
  });
  return res.join(' ');
}
function order(words) {
  return words
    .split(' ')
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(' ');
}
