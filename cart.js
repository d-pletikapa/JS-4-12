'use strict';
console.info('---------------------------------------------------');
console.log('Задания на this (+1 балл) (2)');

// Продолжим работу в cart.js из предыдущего урока
// TODO Методы объекта cart не должны обращаться к объекту по имени
// TODO В объект cart добавьте сеттер setDiscount и свойство discount
// TODO Сеттер setDiscount будет принимать promocode
// если promocode будет строка METHED, то в discount будет добавляться значение 15
// если promocode будет строка NEWYEAR, то в discount будет добавляться значение 21
// TODO метод calculateItemPrice должен учитывать скидку равную процентному значению discount


const cart = {
  items: [],
  count: 0,
  // totalPrice: 0,
  // getTotalPrice() {
  // console.log('cart.totalPrice = ', cart.totalPrice);
  // return cart.totalPrice;
  // },

  get totalPrice() {
    return this.calculateItemPrice();
  },

  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    } else if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
  },
  discount: 0,

  calculateItemPrice() {
    let totalPrice = 0;
    this.items.forEach(item => {
      const itemPrice = item.productPrice * item.productCount;
      totalPrice += itemPrice;
      // console.log(totalPrice);
    });
    // применение скидки:
    return totalPrice - (totalPrice * (this.discount / 100));
  },

  add(productName, productPrice, productCount = 1) {
    const newItem = {productName, productPrice, productCount};
    this.items.push(newItem);
    this.increaseCount(productCount);
    this.totalPrice;
  },

  increaseCount(counter) {
    return this.count += counter;
  },
  print() {
    const resultItems = JSON.stringify(this.items);
    const resultPrice = JSON.stringify(this.totalPrice);
    console.log(`result: ${resultItems}\ntotalPrice: ${resultPrice}`);
  },
  clear() {
    // this.items = [];
    // this.items.splice(0, cart.items.length);
    this.items.length = 0;
    this.count = 0;
    // this.totalPrice = 0;
  },
};

// Performing tests for methods of cart object:

cart.add('Banana', 100, 2);
cart.add('Apple1', 50, 1);
cart.add('Apple2', 60, 1);
cart.add('Orange', 200, 3);
console.log('🚀 ~ file: cart.js ~ line 60 ~ add ~ items', cart.items);

cart.setDiscount = 'METHED';
console.log('Текущая скидка', cart.discount);
// cart.setDiscount = 'NEWYEAR';
// console.log('Текущая скидка', cart.discount);
cart.totalPrice;
cart.print();
cart.clear();


