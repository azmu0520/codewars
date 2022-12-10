function sortArray(array) {
  let res = [];
  array.forEach((element) => {
    if (element % 2 !== 0) {
      res.push(element);
    }
  });
  let ordered = res.sort((a, b) => a - b);
  let count = 0;
  array.map((v, i) => {
    if (v % 2 !== 0) {
      array[i] = ordered[count];
      count++;
    }
  });
  return array;
}

function sortArray(array) {
  var odd = array.filter((elem) => elem % 2 !== 0).sort((a, b) => a - b);
  return array.map((elem) => (elem % 2 === 0 ? elem : odd.shift()));
}
