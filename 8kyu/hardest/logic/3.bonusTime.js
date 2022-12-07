function bonusTime(salary, bonus) {
  // your code here
  return bonus ? `£${salary}0` : `£${salary}`;
}

// #1
// const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;

// #2
// return '£' + salary * (bonus ? 10 : 1);
