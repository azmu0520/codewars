function towerBuilder(nFloors) {
  let space = nFloors;
  let res = [];
  let star = 1;
  for (let i = 1; i <= nFloors; i++) {
    let sam = ' '.repeat(space - i) + '*'.repeat(star) + ' '.repeat(space - i);
    star += 2;
    res.push(sam);
  }
  return res;
}

function towerBuilder(nFloors) {
  let res = [];
  let stars = nFloors * 2 - 1;
  for (let i = 0; i < nFloors; i++) {
    let addedStars = '*'.repeat(stars - i * 2);
    let spaces = ' '.repeat(i);
    res.unshift(`${spaces}${addedStars}${spaces}`);
  }
  return res;
}
