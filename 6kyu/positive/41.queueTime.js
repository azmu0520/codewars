function queueTime(customers, n) {
  var minutes = 0;
  while (customers.length > 0) {
    var t = n;
    for (var i = 0; i < t && i < customers.length; i++) {
      if (--customers[i] === 0) {
        customers.splice(i--, 1);
        t--;
      }
    }
    minutes++;
  }
  return minutes;
}
