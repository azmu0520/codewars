function wave(str) {
  // Code here
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ' ') continue;
    let added = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
    res.push(added);
  }
  return res;
}

wave('two words');
