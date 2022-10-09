function multiTable(number) {
  let res = '';
  for (let i = 1; i <= 10; i++) {
    res += `${i} * ${number} = ${i * number} \n`;
  }
  return res.trim();

  //   #1
  // return [...Array(10)].map((_,i)=>`${i+1} * ${n} = ${n*i+n}`).join('\n')

  //   #2
  //   const multiTable = n => ([1,2,3,4,5,6,7,8,9,10].map(i=>`${i} * ${n} = ${i*n}`)).join('\n')
}

multiTable(5);
