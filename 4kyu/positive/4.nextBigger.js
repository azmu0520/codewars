function nextBigger(n) {
  //your code here

  let arr = n.toString().split('');
  let str = n.toString();
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let l = str[0];
    for (let j = 0; j < arr.length; j++) {
      str = str.replace(str[j], arr[i], j);
      str = str.replace(str[j - 1], l, j);
      console.log(str);
      res.push(+str);
      l = str[j + 1];
    }
  }
  res = res.map(Number).sort((a, b) => a - b);
  res = Array.from(new Set(res));
  return res[res.indexOf(n) + 1] ? res[res.indexOf(n) + 1] : -1;
}
console.log(nextBigger(414));
