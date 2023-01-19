function orderWeight(strng) {
  // your code
  let res = strng.split(' ').sort((a, b) => {
    let aa = eval(a.split('').join('+'));
    let bb = eval(b.split('').join('+'));
    if (aa == bb) {
      return a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase());
    } else return aa - bb;
  });
  return res.join(' ');
}

// orderWeight('103 123 4444 99 2000');
// "2000 103 123 4444 99"

// 1 200 2 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703
// 1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703
