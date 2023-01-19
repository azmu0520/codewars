function nextBigger(n) {
  //your code here
  let str = n.toString();
  let ch = true;
  let test = true;
  let res = [];
  if (str.length == 1) return -1;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] > str[i - 1] && ch) {
      console.log(str[i]);
      res.unshift(str[i], str[i - 1]);
      ch = false;
      test = false;
    } else {
      if (test) {
        res.unshift(str[i]);
      }
      test = true;
    }
  }
  if (n == res.join('')) return -1;
  return +res.join('');
}

console.lo(nextBigger(1));

// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071

// 1234567980
// 1234567908

// 1234567890
