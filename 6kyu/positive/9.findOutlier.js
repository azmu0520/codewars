function findOutlier(integers) {
  //your code here
  var odd = [];
  var even = [];
  integers.forEach((element) => {
    element % 2 == 0 ? even.push(element) : odd.push(element);
  });
  return odd.length == 1 ? odd[0] : even[0];
}

function findOutlier(int) {
  var even = int.filter((a) => a % 2 == 0);
  var odd = int.filter((a) => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}
