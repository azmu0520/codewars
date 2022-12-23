// function solution(input, markers) {
//   //   console.log(input);
//   let c = false;
//   let res = '';
//   for (let i = 0; i < input.length; i++) {
//     if (markers.includes(input[i])) c = true;
//     if (input[i] == '\n') c = false;
//     if (c) continue;
//     else {
//       if (!(markers.includes(input[i + 1]) && input[i] == ' ')) res += input[i];
//     }
//   }
//   return res;
// }

console.log(
  solution('apples, plums % and bananas\npears\noranges !applesauce', [
    '%',
    '!',
  ])
);

// "apples, plums
// \npears
// \noranges"
