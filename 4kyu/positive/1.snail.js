snail = function (array) {
  // enjoy
  let finalItems = [];
  while (array.length) {
    finalItems.push(...array.shift());
    for (let i = 0; i < array.length; i++) {
      finalItems.push(array[i].pop());
    }
    finalItems.push(...(array.pop() || []).reverse());
    for (var i = array.length - 1; i >= 0; i--) {
      finalItems.push(array[i].shift());
    }
  }
  return finalItems;
};

snail([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

// snail([
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25],
// ]);

// [
//   1, 2, 3, 4, 5,
//   10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18,
//   17, 12, 13,
// ];
