let res = [];
function sqInRect(lng, wdth) {
  //your code here
  if (lng == wdth && !res.length) return null;
  if (lng < wdth) {
    let a = lng;
    lng = wdth;
    wdth = a;
  }
  console.log(lng, wdth);
  console.log(res);
  while (wdth >= 1 && lng >= 1) {
    if (lng - wdth == wdth) {
      res.push(wdth, wdth, wdth);
    } else {
      res.push(wdth);
      sqInRect(lng - wdth, wdth);
    }
  }
}

sqInRect(20, 14);
