function isPangram(string) {
  //...
  string = string.toLowerCase().split('');
  string = Array.from(new Set(string));
  let alfabets = string
    .sort((a, b) => a.localeCompare(b))
    .join()
    .replace(/[^a-z]/gi, '');
  if (alfabets.length !== 26) return false;
  else return true;
}

function isPangram(string) {
  //...
  string = string.toLowerCase();
  let arr = string.replace(/[^a-z]/gi, '').split('');
  let set = Array.from(new Set(arr));
  return set.length == 26;
}
