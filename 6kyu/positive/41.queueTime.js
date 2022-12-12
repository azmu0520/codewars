function queueTime(customers, n) {
  //TODO
  let res = 0;
  let rest = 0;
  for (let i = 0; i < customers.length; i = i + n) {
    let totalOne = 0;
    for (let j = i; j < i + n; j++) {
      if (totalOne <= customers[j]) {
        totalOne = customers[j];
        rest -= customers[j];
      } else {
        totalOne -= customers[j];
      }
      console.log(rest);
    }
    rest += totalOne;
  }
}

queueTime([1, 2, 3, 4], 1);
