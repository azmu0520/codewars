function queueTime(customers, n) {
  //TODO
  let res = 0;
  let bigOne = Math.max(...customers);
  console.log(bigOne);
  for (let i = 0; i < customers.length; i = i + n) {
    for (let j = i; j < i + n; j++) {
      if (bigOne < customers[j]) {
        bigOne = customers[j];
      } else {
        res += customers[j];
        bigOne -= customers[j];
      }
      //   console.log(customers[j]);
    }
    // console.log('end');
    // console.log(bigOne);
  }
  res += bigOne;
  console.log(res);
}

queueTime([1, 2, 3, 4], 1);
