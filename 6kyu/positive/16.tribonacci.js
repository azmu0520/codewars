function tribonacci(signature, n) {
  //your code here
  let res = [];
  for (let i = 0; i < n; i++) {
    if (i < 3) {
      res.push(signature[i]);
    } else if (i >= 3) res.push(res[i - 3] + res[i - 2] + res[i - 1]);
  }
  return res;
}

function tribonacci(signature, n) {
  let res = signature.splice(0, n);
  for (let i = 0; i < n - 3; i++) {
    let tripl = res[i] + res[i + 1] + res[i + 2];
    res.push(tripl);
  }
  return res;
}
