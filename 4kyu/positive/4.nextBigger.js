function nextBigger(n) {
  //your code here

  let arr = n.toString().split('');
  let str = n.toString();

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for (let j = 0; j < arr.length; j++) {
      let ch = arr.slice(j, j + 2);
      // if (ch.length == 1) ch.push(arr[i]);
      console.log(ch, j);
    }
  }
}
nextBigger(145);
