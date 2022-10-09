function bloodAlcoholContent({ ounces, abv }, weight, sex, time) {
  // BAC% = (A × 5.14 / W × r) - .015 × H
  sex = sex == 'male' ? 0.73 : 0.66;
  //
  let res = (((ounces * abv * 5.14) / weight) * sex - 0.015 * time).toFixed(4);
  //
  return +res;
  //  return parseFloat(((drinks.ounces * drinks.abv * 5.14 / weight * (sex == 'male' ? 0.73 : 0.66)) - 0.015 * time).toFixed(4));
}

bloodAlcoholContent({ ounces: 50, abv: 0.14 }, 250, 'male', 3);
