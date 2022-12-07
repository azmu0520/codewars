function descendingOrder(n) {
  return +String(n)
    .split('')
    .sort((a, b) => b - a)
    .join('');
}
