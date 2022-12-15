function foldArray(array, runs) {
  let res = [];

  while (runs > 0) {
    let mid = Math.ceil(array.length / 2);
    for (let i = 0; i < mid - 1; i++) {
      res.push(array[i] + array[array.length - 1 - i]);
    }
    runs--;
    console.log(array.length / 2);
    res.push(array[mid - 1]);
    if (runs) {
      array = [...res];
      res.length = 0;
    }
  }

  return res;
}

console.log(foldArray([1, 2, 3, 4, 5], 3));
