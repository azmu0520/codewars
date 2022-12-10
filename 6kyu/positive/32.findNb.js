function findNb(m) {
  for (var n = 0; ; n++) {
    if (m > 0) {
      var currCubeVol = Math.pow(n + 1, 3);
      m = m - currCubeVol;
    } else if (m == 0) {
      return n;
    } else if (m < 0) {
      return -1;
    }
  }
}

function findNb(m) {
  let n = 0;
  let sum = 0;
  while (sum < m) {
    n++;
    sum += Math.pow(n, 3);
  }
  return sum === m ? n : -1;
}
