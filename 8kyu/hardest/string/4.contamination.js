function contamination(text, char) {
  // Code here :)
  if ((!text && !char) || !text) return '';
  return char.repeat(text.length);

  //   #1
  //    return text.replace(/./g, char);

  //   #2
  // [...text].map(e => e = char).join('')
}

console.log(contamination('_3ebzgh4', '&'));
