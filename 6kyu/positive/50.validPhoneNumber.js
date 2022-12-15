function validPhoneNumber(phoneNumber) {
  //TODO: Return whether phoneNumber is in the proper form
  if (phoneNumber.length !== 14) return false;

  let temp = '(xxx) xxx-xxxx';
  let res = '';
  for (let i = 0; i < phoneNumber.length; i++) {
    if (+phoneNumber[i] + 1 > 0) {
      res += phoneNumber[i] == ' ' ? ' ' : 'x';
    } else res += phoneNumber[i];
  }
  return temp === res;
}

validPhoneNumber('(123) 456-7890');

// function validPhoneNumber(phoneNumber){
//     return /^\(\d{3}\) \d{3}\-\d{4}$/.test(phoneNumber);
//   }
