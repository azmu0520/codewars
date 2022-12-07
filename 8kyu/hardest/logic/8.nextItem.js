const nextItem = (xs, item) => {
  const iter = xs[Symbol.iterator]();
  for (let el of iter) {
    if (el === item) return iter.next().value;
  }
};
console.log(nextItem('testing', 't'));
