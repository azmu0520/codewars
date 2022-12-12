function twoSum(numbers, target) {
  // ...
  let res = [];
  for (let i = 0; i < numbers.length; i++) {
    let resNum = target - numbers[i];
    let have = numbers.indexOf(resNum);
    console.log(have);
    if (have !== i && have >= 0) {
      numbers;

      res.unshift(have);
    }
  }
}

twoSum([2, 2, 3], 4);
