function findMissingLetter(array) {
  var res = '';
  for (let i = 0; i < array.length; i++) {
    var cur = String.fromCharCode(array[0].charCodeAt() + i);
    if (cur !== array[i]) {
      res = cur;
      break;
    }
  }
  return res;
}

function findMissingLetter(array) {
  var i = array[0].charCodeAt();
  array.map((x) => (x.charCodeAt() == i ? i++ : i));
  return String.fromCharCode(i);
}
