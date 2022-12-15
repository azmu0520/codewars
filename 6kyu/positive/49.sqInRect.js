function sqInRect(lng, wdth) {
  //your code here
  let res = [];
  function add(h, w) {
    if (h == w && !res.length) return null;
    if (h < w) {
      let a = h;
      h = w;
      w = a;
    }

    if (w >= 1) {
      res.push(w);
      add(w, h - w);
    }
    return res;
  }

  return add(lng, wdth);
}

console.log(sqInRect(20, 14));

function sqInRect(lng, wdth) {
  let arr = [];
  if (lng === wdth) return null;
  while (lng > 0 && wdth > 0) {
    arr.push(lng > wdth ? wdth : lng);
    lng > wdth ? (lng -= wdth) : (wdth -= lng);
  }
  return arr;
}
