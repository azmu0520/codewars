function moveZeros(arr) {
  var zero = arr.filter((i) => i !== 0);
  return zero.concat(arr.filter((i) => i === 0));
}
