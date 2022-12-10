function countSmileys(arr) {
  let str = arr.join(' ');
  str = str.match(/[:;][-~]?[)D]/gi);
  return str ? str.length : 0;
}
