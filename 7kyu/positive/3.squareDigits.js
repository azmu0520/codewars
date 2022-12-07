const squareDigits = (num) =>
  +String(num)
    .split('')
    .reduce((pre, cur) => pre + (+cur) ** 2, '');
