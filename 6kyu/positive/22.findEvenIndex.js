function findEvenIndex(arr) {
  let res = '';
  arr.map((e, i) => {
    let left = arr.slice(-arr.length, i + 1);
    let right = arr.slice(i, arr.length);
    if (
      left.reduce((pre, next) => pre + next, 0) ==
      right.reduce((pre, next) => pre + next, 0)
    ) {
      res = i;
    }
  });

  return res !== '' ? res : -1;
}

const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0);
const findEvenIndex = (a) =>
  a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));
