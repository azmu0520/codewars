function findOdd(A) {
  //happy coding!
  let count = 1;
  let set = A.sort((a, b) => a - b);
  return set.filter((e, i) => {
    if (e === set[i + 1]) count++;
    else {
      if (count % 2 !== 0) {
        return e;
      }
      count = 1;
    }
  })[0];
}

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

const findOdd = (A) =>
  A.filter((x) => A.filter((v) => x === v).length % 2 === 1).reduce((a) => a);
