// function scramble(str1, str2) {
//   let res = '';
//   let samp = {};
//   for (let j = 0; j < str2.length; j++) {
//     samp[str2[j]] = samp[str2[j]] ? samp[str2[j]] + 1 : 1;
//   }
//   for (let i = 0; i < str1.length; i++) {
//     if (str2.includes(str1[i]) && samp[str1[i]]) {
//       res += str1[i];
//       samp[str1[i]] = samp[str1[i]] - 1;
//     }
//   }
//   return res.length >= str2.length;
// }

// Execution Timed Out (12000 ms)
console.log(scramble('scriptingjava', 'javascript'));

function scramble(str1, str2) {
  let sorted1 = str1
    .split('')
    .sort()
    .filter((i) => str2.includes(i))
    .join('');
  let sorted2 = str2.split('').sort().join('');
  return sorted1.substr(0, sorted2.length) == sorted2;
}
