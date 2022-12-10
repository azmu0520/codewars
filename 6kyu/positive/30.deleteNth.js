function deleteNth(arr, n) {
  let res = [];
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = n;
  }

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] >= 1) {
      res.push(arr[i]);
      obj[arr[i]] -= 1;
    }
  }
  return res;
}

const deleteNth = (a, x) => {
  let m = {};
  return a.filter((v) => (m[v] = m[v] + 1 || 1) <= x);
};
