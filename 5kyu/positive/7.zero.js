function zero(param) {
  return Math.floor(eval(`0 ${param || ''}`));
}
function one(param) {
  return Math.floor(eval(`1 ${param || ''}`));
}
function two(param) {
  return Math.floor(eval(`2 ${param || ''}`));
}
function three(param) {
  return Math.floor(eval(`3 ${param || ''}`));
}
function four(param) {
  return Math.floor(eval(`4 ${param || ''}`));
}
function five(param) {
  return Math.floor(eval(`5 ${param || ''}`));
}
function six(param) {
  return Math.floor(eval(`6 ${param || ''}`));
}
function seven(param) {
  return Math.floor(eval(`7 ${param || ''}`));
}
function eight(param) {
  return Math.floor(eval(`8 ${param || ''}`));
}
function nine(param) {
  return Math.floor(eval(`9 ${param || ''}`));
}

function plus(param) {
  return `+ ${param >= 0 ? param : ''}`;
}
function minus(param) {
  return `- ${param >= 0 ? param : ''}`;
}
function times(param) {
  console.log(param);
  return `* ${param >= 0 ? param : ''}`;
}
function dividedBy(param) {
  return `/ ${param >= 0 ? param : ''}`;
}

console.log(six(plus(zero())));
