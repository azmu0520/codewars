function toWeirdCase(string) {
  //TODO
  let res = '';
  string = string.split(' ');
  string.forEach((element) => {
    let peace = '';
    for (let i = 0; i < element.length; i++) {
      peace += i % 2 == 0 ? element[i].toUpperCase() : element[i].toLowerCase();
    }
    res += peace + ' ';
  });

  return res.trim();
}

toWeirdCase('This is a test');

// ThIs Is A TeSt
