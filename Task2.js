'use strict';
console.info('---------------------------------------------------');
console.log('Задача 2');

// TODO: Напишите рекурсивную функцию, которая принимает один параметр массив,  генерирует целое число от 0 до 10 включительно и добавляет его в массив.
//
// TODO:   Каждый раз после добавления нового числа проверяет сумму элементов массива, если она меньше 50 запускается снова передавая себе массив. Если сумма больше 50-ти, то функция возвращает этот массив.

const anyArray = [];

const getRandomNumber = () => {
  const min = Math.ceil(1);
  const max = Math.floor(10);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function addRandomNumber() {
  anyArray.push(getRandomNumber());

  let arraySumOfElements = 0;
  anyArray.forEach((item) => {
    arraySumOfElements += item;
  });
  // Альтернативный подсчет суммы массива
  // const arraySumOfElements = anyArray.reduce((total, currentItem) => total + currentItem);


  if (arraySumOfElements > 50) {
    console.log('arraySumOfElements', arraySumOfElements);
    return anyArray;
  }
  console.log(anyArray);
  return addRandomNumber(anyArray);
}

addRandomNumber(anyArray);
