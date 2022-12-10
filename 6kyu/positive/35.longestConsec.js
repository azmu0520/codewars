function longestConsec(strarr, k) {
  // your code
  if (strarr.length < k || k < 0) return '';
  let res = '';

  for (let i = 0; i < strarr.length; i++) {
    let selected = strarr.slice(i, i + k).join('');
    if (res.length < selected.length) res = selected;
  }
  return res;
}

longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 2);

function longestConsec(strarr, k) {
  var longest = '';
  for (var i = 0; k > 0 && i <= strarr.length - k; i++) {
    var tempArray = strarr.slice(i, i + k);
    var tempStr = tempArray.join('');
    if (tempStr.length > longest.length) {
      longest = tempStr;
    }
  }
  return longest;
}
