function animals(heads, legs) {
  let cow = legs / 2 - heads;
  if (legs % 2 !== 0 || heads - cow < 0 || cow < 0) return 'No solutions';
  return [heads - cow, cow];

  // const cows = legs / 2 - heads;
  // const chickens = heads - cows;

  // if (legs & 1 || chickens > heads || cows > heads)
  //   return "No solutions";
  // else
  //   return [chickens, cows];
}

animals(72, 200);
