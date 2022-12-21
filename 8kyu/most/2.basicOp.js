function basicOp(operation, value1, value2) {
  // Code
  let res = 0;
  switch (operation) {
    case '+':
      res = value1 + value2;
      break;
    case '-':
      res = value1 - value2;
      break;
    case '*':
      res = value1 * value2;
      break;
    case '/':
      res = value1 / value2;
      break;
  }
  return res;
}
basicOp('+', 4, 7);

// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {
  var cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2,
  };
  return cases[operation];
}
