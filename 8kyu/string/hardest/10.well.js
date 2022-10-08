function well(x) {
  let good = x.join('').match(/good/g);
  if (!good) return 'Fail!';
  good.length <= 2 ? 'Publish!' : 'I smell a series!';

  //   #1
  //  const good_count = x.filter(x => x == 'good').length;
  //   return good_count < 1 ? 'Fail!' :
  //   good_count < 3 ? 'Publish!' : 'I smell a series!';
}

well(['good', 'bad', 'bad', 'bad', 'bad']);
