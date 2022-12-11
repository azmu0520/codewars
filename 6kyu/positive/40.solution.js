// complete the function
function solution(string) {
  let res = '';
  for (let i = 0; i < array.length; i++) {
    if (string[i] !== string[i].toLowerCase()) res += ' ' + string[i];
    else res += string[i];
  }
  return res;
}

solution('camelCasing');
