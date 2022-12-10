function toCamelCase(str) {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '_' || str[i] == '-') {
      res += str[i + 1].toUpperCase();
    } else if (str[i - 1] == '_' || str[i - 1] == '-') continue;
    else res += str[i];
  }
  return res;
}

function toCamelCase(str) {
  return str.replace(/[_-]\w/gi, (ch) => ch[1].toUpperCase());
}
