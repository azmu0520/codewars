function highAndLow(numbers) {
  var res = [];
  var arr = numbers.split(' ').map((i) => +i);
  res.push(
    arr.sort((a, b) => a - b)[arr.length - 1],
    arr.sort((a, b) => a - b)[0]
  );
  return res.join(' ');
}
