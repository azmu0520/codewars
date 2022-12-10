decodeMorse = function (morseCode) {
  //your code here
  let morse = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '-.-.--': 'SOS!',

    '.-.-.-': '.',
    '--..--': ',',
  };
  let word = morseCode.split('   ');
  let res = '';
  word.map((item) => {
    let letter = item.split(' ').map((v) => morse[v]);
    res += ` ${letter.join('')}`;
  });
  return res.trim() ? res.trim() : 'SOS';
};

decodeMorse = function (morseCode) {
  return morseCode
    .trim()
    .split(/  | /)
    .map((code) => MORSE_CODE[code] || ' ')
    .join('');
};
