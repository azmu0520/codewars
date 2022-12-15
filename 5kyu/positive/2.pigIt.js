function pigIt(str) {
  var arr = str.split(' ');
  arr = arr.map((i) => {
    if (!i.match(/\p{P}/gu)) {
      return i.replace(i[0], '').concat(i[0], 'ay');
    } else return i;
  });
  return arr.join(' ');
}
