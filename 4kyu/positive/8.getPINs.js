function getPINs(observed) {
  let res = [];
  let obj = {
    1: [1, 2, 4],
    2: [1, 2, 3, 5],
    3: [2, 3, 6],
    4: [1, 4, 5, 7],
    5: [2, 4, 5, 6, 8],
    6: [3, 5, 6, 9],
    7: [4, 7, 8],
    8: [5, 7, 8, 9, 0],
    9: [6, 8, 9],
    0: [8, 0],
  };
  for (let i = 0; i < observed.length; i++) {
    res.push(obj[observed[i]]);
  }
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res.length; j++) {
      if (i == j) continue;
      else {
        for (let z = 0; z < res[j].length; z++) {
          sum += res[j][z];
          //   console.log(res[j][z]);
        }
      }
    }
    sum = '';
  }
}

getPINs('11');
//  ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
//  [ 1, 2, 4 ]
//  [ 1, 2, 4 ]

// [ 2, 3, 6 ], [ 3, 5, 6, 9 ], [ 6, 8, 9 ]
// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘
