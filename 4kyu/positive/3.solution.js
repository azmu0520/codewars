function solution(list) {
  // TODO: complete solution
  let res = '';
  let count = 1;
  for (let i = 0; i < list.length; i++) {
    if (
      (list[i + 1] !== list[i] + 1 && list[i - 1] !== list[i] - 1) ||
      (list[i + 2] !== list[i] + 2 && list[i - 2] !== list[i] - 2)
    ) {
      console.log(list[i]);
      res += ` ${list[i]}`;
    } else if (list[i + 1] == list[i] + 1) {
      if (count == 1) {
        res += ` ${list[i]}-`;
      }
      count++;
    } else {
      count = 1;
      res += list[i];
    }
  }
  return res.trim().replaceAll(' ', ',');
}

console.log(
  solution([
    -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
  ])
);

//  -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
//  -10      -8, -6, -3             1, 3     5, 7            11, 14, 15, 17          20,
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

// -6,-3-1,3-5,7-11,14,15,17-20

f = (a) => (
  (r = []),
  a.map((e, i) =>
    i && !(a[i - 1] + 1 - e) ? r.push(r.pop().concat(e)) : r.push([e])
  ),
  r.map((e) => (e.length - 1 ? `${e[0]}-${e.pop()}` : '' + e))
);
