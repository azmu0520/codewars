Math.roundTo = function (number, precision) {
  // TODO: Program Me
  //   console.log(number);
  return Number(number.toFixed(precision));
};

Math.roundTo(9.9999, 3);

// #1
// var calculatedPrecision = Math.pow(10, precision);
// return (Math.round(number * calculatedPrecision)) / calculatedPrecision;

// #2
// Math.roundTo=(x,p)=>+x.toFixed(p)
