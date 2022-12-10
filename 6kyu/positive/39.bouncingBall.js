function bouncingBall(h, bounce, window) {
  // your code here
  if (h < 0 || bounce < 0 || bounce >= 1 || h < window) return -1;
  let count = 0;
  let countBounce = () => {
    h = h * bounce;
    count++;
  };
  while (h > window) {
    countBounce();
    count++;
  }
  return --count;
}

bouncingBall(30, 0.66, 1.5);
