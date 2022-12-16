function rot13(message) {
  return message.replace(/[a-zA-Z]/g, function (match) {
    return String.fromCharCode(
      match.charCodeAt(0) +
        (match.toUpperCase().localeCompare('M') > 0 ? -13 : 13)
    );
  });
}

const rot13 = (message) => {
  const alpha =
    'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  return message.replace(
    /[a-z]/gi,
    (letter) => alpha[alpha.indexOf(letter) + 13]
  );
};
