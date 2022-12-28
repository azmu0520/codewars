function sumIntervals(intervals) {
  //TODO
  let sort = intervals.sort((a, b) => b[1] - a[1]);
  let res = 0;
  for (let i = 0; i < intervals.length; i++) {
    let dif = 0;
    if (i !== intervals.length - 1) dif = sort[i + 1][1] - sort[0];
    if (dif > 0) {
      res += sort[i][1] - sort[i][0] - dif;
    } else {
      res += sort[i][1] - sort[i][0];
    }
    console.log(res, dif, sort[i][1]);
  }
}

sumIntervals([
  [1, 4],
  [7, 10],
  [3, 5],
]);
