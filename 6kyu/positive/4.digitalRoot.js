function digital_root(n) {
  return n < 10
    ? n
    : digital_root(
        String(n)
          .split('')
          .reduce((p, n) => p + +n, 0)
      );
}

function digital_root(n) {
  return ((n - 1) % 9) + 1;
}
