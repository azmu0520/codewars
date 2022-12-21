// function drawStairs(n) {
//   // your code here
//   let res = '';
//   for (let i = 0; i < n; i++) {
//     let space = ' '.repeat(i);
//     res += space + 'I\n';
//   }
//   return res.trim();
// }

// drawStairs(3);
// //I
// // I
// //  I
// 'use strict';

function duplicateCount(text) {
  //...
  let res = '';
  text = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    if (i !== text.lastIndexOf(text[i])) {
      if (!res.includes(text[i])) res += text[i];
    }
  }
  return res.length;
}

console.log(duplicateCount('aaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaabaaaaa'));
