console.log('Тренировка this');
// 'use strict';


// .this всегда ссылается на объект, this существует только внутри функции и определяется при вызове функции, this не зависит от области видимоти.

function one() {
  console.log('one', this);
  two();
}
function two() {
  console.log('two', this);
  three();
}
function three() {
  console.log('three', this);
}

one();

a = 5; // var a = 5;
const b = 10; // const b = 10;
const bar = () => {
  function thisFoo() {
    console.log('a', this.a);
    console.log('b', this.b);
    console.log(this);
  }

  thisFoo();
};

bar();


'use strict';


const obj = {
  x: 5,
  y: 15,
  foo() {
    console.log(this);
  },
  bar: thisBoo,
};

const obj2 = {
  x: 55,
  y: 35,
  foo: obj.bar,
};


obj.foo();
obj.bar();
obj2.foo();

const spar = function(cb) {
  cb();
};
spar(obj.bar);


// явная привязка(позволяет использовать конкретный объект при вызове функции) call apply bind

function thisBoo(a, b, c) {
  console.log(a, b, c);
  console.log(this);
}

thisBoo.call(obj, 1, 2, 3); // вызывает фунцию сразу, принимает this и параметры функции
thisBoo.apply(obj, [1, 2, 3]); // принимает this и объект, который распаковывает в виде параметров функции
const dar = thisBoo.bind(obj, 1, 2); // принимает объект(this) и параметры функции, но можно передать не все парам., а остальные передать во время вызова функции; (bind не вызывает функцию сразу а лишь возвращает ее с привязкой this
dar(5);

const arr = [1, 2, 3, 4, 5, 6];
arr.forEach(function(item) { // вторым параметром можно передать this , но только если функция не стрелочная;
  console.log(item, this);
}, obj);
// у стрелочной функции нет контекста вызова.

const obj3 = {
  x: 1,
  y: 2,
  // либо уточняем this вторым параметром, либо используем стрелочную функцию

  // sum(arr) {
  //   return arr.map(function(item) {
  //     return item + this.x + this.y;
  //   }, this);
  // },

  // стрелочная функция не имеет контекса поэтому this берется из объекта obj3.sum(arr);
  sum(arr) {
    return arr.map(item => item + this.x + this.y, this);
  },
  // в методе контекстная привязка теряется и будет по умолчанию к window

  // sum: (arr) => {
  //   return arr.map(item => item + this.x + this.y, this);
  // },
};

const arr2 = obj3.sum(arr);
console.log('-> arr2', arr2);
