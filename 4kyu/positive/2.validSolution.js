function validSolution(board) {
  //TODO
  let res = true;
  let n1 = [];
  let n2 = [];
  let n3 = [];
  let trip = 1;
  board = board.flat();
  for (let i = 0; i < board.length; i++) {
    if (trip >= 7) {
      if (!n3.includes(board[i])) {
        n3.push(board[i]);
      }
    } else if (trip >= 4 && trip <= 6) {
      if (!n2.includes(board[i])) {
        n2.push(board[i]);
      }
    } else if (trip > 0) {
      if (!n1.includes(board[i])) {
        n1.push(board[i]);
      }
    }
    if (trip % 9 == 0) {
      trip = 0;
    }
    if ((i + 1) % 27 == 0) {
      if (n1.length !== 9 || n2.length !== 9 || n3.length !== 9) {
        res = false;
        // break;
      } else {
        n1.length = 0;
        n2.length = 0;
        n3.length = 0;
      }
    }

    trip += 1;
  }
  return res;
}

validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9],
]);

function equals45(n) {
  return n == 45;
}

function validSolution(board) {
  var sumh = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var sumv = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  osums = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      sumh[i] += board[i][j];
      sumv[j] += board[i][j];
      osums[Math.floor(i / 3)][Math.floor(j / 3)] += board[i][j];
    }
  }
  for (var i = 0; i < 3; i++) if (!osums[i].every(equals45)) return false;
  return sumh.every(equals45) && sumv.every(equals45);
}
