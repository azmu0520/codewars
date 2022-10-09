function defineSuit(card) {
  // good luck
  let sample = { '♣': 'clubs', '♦': 'diamonds', '♥': 'hearts', '♠': 'spades' };
  return sample[card[card.length - 1]];

  // #1
  //   return {
  //     '♣' : 'clubs',
  //     '♦' : 'diamonds',
  //     '♥' : 'hearts',
  //     '♠' : 'spades'
  //   }[card.substr(-1)]

  // #2
  //   return {'♣': 'clubs', '♠': 'spades', '♦': 'diamonds', '♥': 'hearts'}[card.slice(-1)];
}

defineSuit('Q♠');
