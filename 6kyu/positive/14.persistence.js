function persistence(num) {
  let count = 0; // 1 + 1 + 1
  function inner(params) {
    params = params.toString();
    if (params.length > 1) {
      count++;
      let arr = eval(params.split('').join('*'));
      return inner(arr);
    } else return count;
  }
  return inner(num);
}

const persistence = (num) => {
  return `${num}`.length > 1
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b))
    : 0;
};
