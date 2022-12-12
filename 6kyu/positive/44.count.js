function count(string) {
  // The function code should be here
  let res = {};
  for (let i = 0; i < string.length; i++) {
    if (res.hasOwnProperty(string[i])) {
      res[string[i]] += 1;
    } else {
      res[string[i]] = 1;
    }
  }
  return res;
}

function count(string) {
  var count = {};
  string.split('').forEach(function (s) {
    count[s] ? count[s]++ : (count[s] = 1);
  });
  return count;
}

count('abab');
