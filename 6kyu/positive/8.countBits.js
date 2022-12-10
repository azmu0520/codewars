var countBits = function (n) {
  var bin = n.toString(2);
  return bin.split('').reduce((pre, next) => (pre += +next), 0);
};
countBits = (n) => n.toString(2).split('0').join('').length;
