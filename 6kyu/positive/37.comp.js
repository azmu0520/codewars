function comp(array1, array2) {
  //your code here
  let sqrted = [];
  if (!(array1 && array2)) return false;
  for (let i = 0; i < array2?.length; i++) {
    sqrted.push(Math.sqrt(array2[i]));
  }
  sqrted = sqrted.sort((a, b) => a - b).join('');
  return sqrted == array1.sort((a, b) => a - b).join('');
}

console.log(comp([], null));

function comp(array1, array2) {
  if (array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array1.map((v) => v * v).every((v, i) => v == array2[i]);
}
