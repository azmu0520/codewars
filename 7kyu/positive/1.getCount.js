function getCount(str) {
  var count = 0;
  var vov = 'aeiou';
  for (let i = 0; i < str.length; i++) {
    if (vov.includes(str[i])) count++;
  }
  return count;
}
