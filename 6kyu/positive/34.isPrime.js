function isPrime(num) {
  //TODO
  let s = Math.sqrt(num);
  for (let i = 2; i <= s; i++) if (num % i === 0) return false;
  return num > 1;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
