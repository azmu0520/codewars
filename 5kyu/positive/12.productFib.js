function productFib(prod) {
  // ...

  let res = [0, 1, 1];
  while (res[res.length - 1] * res[res.length - 2] < prod) {
    let num = res[res.length - 1] + res[res.length - 2];
    res.push(num);
  }

  let final = [res[res.length - 2], res[res.length - 1]];
  if (res[res.length - 2] * res[res.length - 1] == prod) {
    final.push(true);
  } else final.push(false);
  return final;
}

productFib(4895);

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
// F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

// 4895

// function productFib(prod){
//   var n = 0;
//   var nPlus = 1;
//   while(n*nPlus < prod) {
//     nPlus = n + nPlus;
//     n = nPlus - n;
//   }
//   return [n, nPlus, n*nPlus===prod];
// }
