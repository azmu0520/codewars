var maxSequence = function (arr) {
  // ...
  let maxIn = 0;
  for (let i = 0; i < arr.length; i++) {
    let test = 0;
    for (let j = i; j < arr.length; j++) {
      test += arr[j];
      if (maxIn < test) maxIn = test;
    }
  }
  return maxIn;
};

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

var maxSequence = function (arr) {
  var min = 0,
    ans = 0,
    i,
    sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
};
