var uniqueInOrder = function (iterable) {
  var res = [];

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      res.push(iterable[i]);
    }
  }
  return res;
};

var uniqueInOrder = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};
