function duplicateCount(text) {
  var count = 0;
  var sort = Array.from(new Set(text.toLowerCase()));
  for (let i = 0; i < sort.length; i++) {
    var reg = new RegExp(sort[i], 'gi');
    if (text.toLowerCase().match(reg).length > 1) count++;
  }
  return count;
}
