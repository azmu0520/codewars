var maxSequence = function (arr) {
  // ...
  let most = [];
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let res = [];
    for (let j = i; j < arr.length; j++) {
      res.push(arr[j]);
    }

    let sum = res.reduce((a, b) => a + b, 0);
    if (totalSum < sum) {
      totalSum = sum;
      most = [...res];
    }

    res.length = 0;
  }
  console.log(most);
};

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
