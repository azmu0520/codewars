function validParentheses(parens) {
  let count = parens.length / 2;
  if (!Number.isInteger(count)) return false;

  while (count) {
    parens = parens.replace(/\(\)/g, '');
    count--;
  }
  return parens ? false : true;
}
