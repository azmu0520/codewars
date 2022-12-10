function high(x) {
  let arr = x.split(' ');
  let res = '';
  let num = 0;
  arr.forEach((e) => {
    let count = 0;
    for (let i = 0; i < e.length; i++) {
      count += e[i].charCodeAt() - 96;
    }
    if (count > num) {
      num = count;
      res = e;
    }
  });
  return res;
}
