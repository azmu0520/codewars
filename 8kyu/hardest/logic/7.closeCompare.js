function closeCompare(a, b, margin = 0) {
  // ...
  let dis = a - b;
  return margin >= Math.abs(dis) ? 0 : dis > 0 ? 1 : -1;
}

console.log(closeCompare(4, 5));
// 8.1, 5, 3
