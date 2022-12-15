function rgb(r, g, b) {
  var obj = Object.values(arguments);
  var res = '';
  for (let i = 0; i < obj.length; i++) {
    if (obj[i] <= 0) {
      res += '00';
    } else if (obj[i] >= 255) {
      res += 'FF';
    } else if (obj[i].toString(16).length == 1) {
      res += `0${obj[i].toString(16).toUpperCase()}`;
    } else {
      res += obj[i].toString(16).toUpperCase();
    }
  }
  return res;
}
