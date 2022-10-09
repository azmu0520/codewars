function whoIsPaying(name) {
  //your code here
  if (name.length <= 2) return [`${name}`];
  return [name, name.slice(0, 2)];

  //   #1
  //  return (name.length>2)?([name, name.substr(0,2)]):[name];

  //   #2
  // [...new Set([name, name.slice(0, 2)])]

  //   #3
  //   const whoIsPaying = (n) => (n === (x = n.slice(0, 2)) ? [n] : [n, x]);
}

console.log(whoIsPaying('Mexico'));
