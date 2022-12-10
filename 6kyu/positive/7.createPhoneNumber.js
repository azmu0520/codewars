function createPhoneNumber(str) {
  let sample = '(xxx) xxx-xxxx';

  for (let i = 0; i < str.length; i++) {
    sample = sample.replace('x', str[i]);
  }
  return sample;
}

function createPhoneNumber(numbers) {
  var one = numbers.splice(0, 3).join('');
  var two = numbers.splice(0, 3).join('');
  var three = numbers.splice(0, numbers.length).join('');
  return `(${one}) ${two}-${three}`;
}
