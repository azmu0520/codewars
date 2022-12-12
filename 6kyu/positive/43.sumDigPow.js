function sumDigPow(a, b) {
  // Your code here
  let res = [];
  for (let i = a; i < b; i++) {
    let str = i.toString();
    let sum = 0;
    for (let k = 0; k < str.length; k++) {
      sum += str[k] ** (k + 1);
    }
    if (i == sum) res.push(i);
  }
  return res;
}

sumDigPow(1, 100);
