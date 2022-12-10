function solution(str) {
  var arr = str.split('');
  var res = [];
  for (let i = 0; i < parseInt(str.length / 2); i++) {
    res.push(arr.splice(0, 2).join(''));
  }
  if (arr.length == 1) {
    res.push(arr.splice(0, 1).join('').padEnd(2, '_'));
  }
  return res;
}

function solution(str) {
  const arr = str.split('');

  return arr
    .map((el, i) => el + (arr.splice(i + 1, 1)[0] || '_'))
    .filter((el) => el);
}
