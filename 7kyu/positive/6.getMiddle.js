function getMiddle(s) {
  return s.length % 2 == 0
    ? `${s[s.length / 2 - 1]}${s[s.length / 2]}`
    : s[Math.floor(s.length / 2)];
}

function getMiddle(s) {
  if (s.length % 2 == 0) {
    return `${s[Math.floor(s.length / 2) - 1]}${s[Math.floor(s.length / 2)]}`;
  } else {
    return s[Math.floor(s.length / 2)];
  }
}
