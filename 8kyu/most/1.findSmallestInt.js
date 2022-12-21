function findSmallestInt(args) {
  let biggest = -Infinity;
  for (let i = 0; i < args.length; i++) {
    if (biggest < args[i]) {
      biggest = args[i];
    }
  }
  console.log(biggest);
  return biggest;
}

findSmallestInt([134233, -34, 8, -1, Infinity]);
