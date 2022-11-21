'use strict';
console.info('---------------------------------------------------');
console.log('Задания на this (+1 балл) (1)');


// TODO Создать объект rectangle, который описывает ширину и высоту (свойства width и height) прямоугольника

// TODO Объект должен иметь 2 сеттера для записи ширины и высоты и два геттера для получения периметра и площади прямоугольника

// TODO Сеттеры могут принимать только числа
// TODO Геттеры возвращают строку число + "см" пример "40см"
// TODO По умолчанию значения высоты и ширины заданы 5 см


const rectangle = {
  currentWidth: 5,
  currentHeight: 5,
  get P() {
    console.info('Периметр прямоугольника:');
    return `${(this.currentWidth + this.currentHeight) * 2} см`;
  },
  get S() {
    console.info('Площадь прямоугольника:');
    return `${this.currentWidth * this.currentHeight} см`;
  },
  set width(val) {
    if (typeof val === 'number') {
      this.currentWidth = val;
    } else {
      console.error('Принимаю только числа!');
    }
  },
  set height(val) {
    if (typeof val === 'number') {
      this.currentHeight = val;
    } else {
      console.error('Принимаю только числа!');
    }
  },
};

console.log(rectangle.P);
console.log(rectangle.S);

rectangle.width = 'abc';
console.log('Текущая ширина', rectangle.currentWidth);
rectangle.height = 10;
console.log('Текущая высота', rectangle.currentHeight);

console.log(rectangle.P);
console.log(rectangle.S);


