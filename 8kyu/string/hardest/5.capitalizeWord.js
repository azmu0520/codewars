function capitalizeWord(word) {
  word = word.replace(word[0], word[0].toUpperCase());
  return word;

  //   #1
  //  return word[0].toUpperCase() + word.slice(1);

  //   #2
  // word.replace(word.charAt(0), word.charAt(0).toUpperCase());

  //   #3
  //   `${w[0].toUpperCase()}${w.slice(1)}`;
}

capitalizeWord('word');
