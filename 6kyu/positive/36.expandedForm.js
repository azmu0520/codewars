function expandedForm(num) {
  // Your code here
  num = num.toString();
  let res = [];
  for (let i = 0; i < num.length; i++) {
    let temp = num[i] + '0'.repeat(num.length - 1 - i);
    if (+temp) res.push(temp);
  }

  return res.join(' + ');
}

expandedForm(70304);
