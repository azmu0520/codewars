function cakes(recipe, available) {
  let lengthR = Object.keys(recipe);
  let lengthA = Object.keys(available);
  let res = [0, 0];
  for (const key in recipe) {
    if (!lengthA.includes(key)) {
      return 0;
    } else if (recipe[key] > available[key]) {
      return 0;
    } else {
      if (res[0] < recipe[key]) {
        res = [recipe[key], available[key]];
      }
    }
  }
  return parseInt(res[1] / res[0]);
}

console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);

// Kata Error
