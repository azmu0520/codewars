const disemvowel = (str) =>
  str
    .split('')
    .reduce(
      (pre, next) => (!'aeiou'.includes(next.toLowerCase()) ? pre + next : pre),
      ''
    );
