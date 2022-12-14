String.prototype.camelCase = function () {
  //your code here
  let res = '';
  for (let i = 0; i < this.length; i++) {
    if (this[i] == ' ') continue;
    if (i == 0) res += this[i].toUpperCase();
    else if (this[i - 1] == ' ') res += this[i].toUpperCase();
    else res += this[i];
  }
  return res;
};

'ads j a'.camelCase();

String.prototype.camelCase = function () {
  return this.split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
};
