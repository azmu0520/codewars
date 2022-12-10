function digPow(n, p) {
  var count = p;
  var str = String(n);
  var res = 0;
  for (let i = 0; i < str.length; i++) {
    res += (+str[i]) ** count;
    count++;
  }
  if (res < n || !Number.isInteger(res / n)) {
    return -1;
  } else if (res == n) {
    return 1;
  } else return res / n;
}

function digPow(n, p) {
  // ...

  let count = p;
  let str = String(n);
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    res += (+str[i]) ** count;
    count++;
  }
  if (res < n || !Number.isInteger(res / n)) {
    return -1;
  } else if (res / n == n) {
    return 1;
  } else return res / n;
}
