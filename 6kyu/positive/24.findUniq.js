function findUniq(arr) {
  // do magic
  let sort = arr.sort((a, b) => a - b);
  return sort[0] == sort[1] ? sort[sort.length - 1] : sort[0];
}

function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}
