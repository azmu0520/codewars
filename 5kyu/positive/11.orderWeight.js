function orderWeight(strng) {
  // your code
  let arr = strng.split(' ');
  let res = [];
  //   arr = arr.sort(
  //     (a, b) => eval(a.split('').join('+')) < eval(b.split('').join('+'))
  //   );
  arr.map((item) => {
    let a = eval(item.split('').join('+'));

    console.log(a);
  });
}

orderWeight('103 123 4444 99 2000');
// "2000 103 123 4444 99"
