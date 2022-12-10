function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  let str = walk.join();
  let n = str.match(/n/g) || [];
  let s = str.match(/s/g) || [];
  let w = str.match(/w/g) || [];
  let e = str.match(/e/g) || [];
  return n.length === s.length && w.length === e.length;
}

function isValidWalk(walk) {
  function count(val) {
    return walk.filter(function (a) {
      return a == val;
    }).length;
  }
  return (
    walk.length == 10 && count('n') == count('s') && count('w') == count('e')
  );
}
