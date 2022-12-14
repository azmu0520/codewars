function twoSum(numbers, target) {
  // ...
  let res = [];
  parent: for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i == j) continue;
      if (numbers[i] + numbers[j] == target) {
        res.push(i, j);
        break parent;
      }
    }
  }
  return res;
}

twoSum([2, 2, 3], 4);
