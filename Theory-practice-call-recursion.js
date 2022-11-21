'use strict';
console.log('Тренировка рекурсия');

const bar = (x) => {
  x *= 2;
  // косвенная рекурсия
  if (x > 100) {
    return x;
  }
  return foo(x);
};

const foo = (x) => {
  x *= 3;

  // // рекурсия
  // if (x < 100) {
  //   // foo(x);
  //   return foo(x);
  // }
  // return x;

  // хвостовая рекурсия
  if (x > 100) {
    return x;
  }
  // return foo(x);
  return bar(x);
};

console.log(foo(2));


const pow = (n, power) => {
  if (power === 1) {
    return n;
  } else {
    return n * pow(n, power - 1);
  }
};

console.log(pow(2, 4));
console.log(Math.pow(2, 4));
console.log(2 ** 4);


const factorial = n => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(5));
console.log(1 * 2 * 3 * 4 * 5);

const fibo = n => {
  if (n <= 2) {
    return 1;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
};
console.log(fibo(5));

const fibo2 = n => {
  let a = 1;
  let b = 0;
  let c = 0;
  while (n > 0) {
    c = a + b;
    b = a;
    a = c;
    n -= 1;
  }
  return b;
};
console.log('-> fibo2', fibo2(5));

