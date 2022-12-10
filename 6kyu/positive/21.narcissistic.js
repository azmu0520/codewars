function narcissistic(value) {
  let res = 0;
  let str = value.toString().split('');
  if (str.length == 1) return true;
  str.forEach((e) => {
    res += e ** str.length;
  });
  return res === value;
}

function narcissistic(value) {
  return (
    ('' + value).split('').reduce(function (p, c) {
      return p + Math.pow(c, ('' + value).length);
    }, 0) == value
  );
}
