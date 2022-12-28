function nextBigger(n) {
  //your code here
  let str = n.toString().split('');
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i - 1] < str[i]) {
      console.log(str[i], str[i - 1]);
      str.splice([i - 1], i + 1, [str[i], str[i - 1], ...str.slice(i)]);
      break;
    } else {
      console.log(str[i]);
    }
  }
  return str.join('').replaceAll(',', '');
}
console.log(nextBigger(1234567890));
// 1234567908
