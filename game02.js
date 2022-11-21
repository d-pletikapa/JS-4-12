'use strict';
console.info('---------------------------------------------------');
console.log('Задание 1 - Угадай число с рекурсией:');

// Создайте файл game02.js
// • бот предлагает ввести два числа
// , и загадывает случайное число в этом диапазоне
// • бот запоминает каждое число которое ввел пользователь и записывает в массив

// бот отграничивает количество попыток до 30% от количества цифр в диапазоне
// • если диапазон от 50 до 100, то попыток бот даёт 15
// если пользователь повторно ввел число, которое вводил ранее,
// то бот выводит "Это число вы уже вводили" попытка не засчитывается
// • если попытки закончились игра прекращается


const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
  // The maximum is inclusive and the minimum is inclusive
};

const numberIsnumber = (anyNumber) => {
  // Рекурсия
  if (Number.isNaN(parseFloat(anyNumber))) {
    anyNumber = prompt(`Ошибка ${anyNumber} - не пара чисел, Введите минимальное и масимальное число через запятую ' 1,100 ': `, '1,100').split(',');
    console.log('-> anyNumber', anyNumber);
  } else {
    return anyNumber;
  }
  return numberIsnumber(anyNumber);

  // while (Number.isNaN(parseFloat(anyNumber))) {
  //   anyNumber = prompt(`Ошибка ${anyNumber} - не пара чисел,
  //    Введите минимальное и масимальное число через запятую '
  //     1,100 ': `, '1,100').split(',');
  //   console.log('-> anyNumber', anyNumber);
  // }
  // return anyNumber;
};
// Функция игры
const newGame = () => {
  const playerNumber = [];
  const findLastNumber = () => parseInt(playerNumber[playerNumber.length - 1]);

  // Получение Диапазона чисел для игры
  let minMaxNumber = prompt(`Введите минимальное и масимальное число через запятую ' 1,100 ': `, '1,100').split(',');
  minMaxNumber = numberIsnumber(minMaxNumber);
  const [minNumber, maxNumber] = minMaxNumber;

  // Бот загадывает число
  const randomNumber = getRandom(minNumber, maxNumber);
  console.log('BOT randomNumber =', randomNumber);

  // Запрашиваем первую попытку на отгадывание числа
  let lastAnswer;
  lastAnswer = +playerNumber.push(prompt('Угадай моё число! (выйти - отмена) : ', '50'));

  // Вычисляем попытки
  let tryAmount;

  if (maxNumber - minNumber > 50) {
    tryAmount = 15;
  } else {
    tryAmount = Math.floor((maxNumber - minNumber) * 0.3);
  }

  // Цикл игры (переделан в функцию)
  const gameCore = () => {
    // if (tryAmount > 0 && +findLastNumber() !== randomNumber) {
    //   return;
    // }
    tryAmount--;
    const returnTry = () => {
      if (playerNumber.some((item) => item === lastAnswer)) {
        tryAmount++;
        console.log('-> Попытка не засчитывается вы уже вводили это число');
      } else {
        console.log('-1 Попытка, осталось попыток: ', tryAmount);
      }
    };


    if (Number.isNaN(parseFloat(lastAnswer)) && lastAnswer !== null) {
      alert(`${lastAnswer} - не число`);
      tryAmount++;
      console.log('-> Попытка не засчитывается');
      playerNumber.pop();
      playerNumber.push((lastAnswer = prompt(`Введи число! : `)));
      // console.log('findLastNumber()', findLastNumber());
      // console.log("-> playerNumber", playerNumber);
      console.log('-> Осталось попыток: ', tryAmount);
    } else if (findLastNumber() < randomNumber && findLastNumber() !== null && tryAmount > 0) {
      lastAnswer = prompt('Больше! : ', findLastNumber());
      returnTry(tryAmount);
      playerNumber.push(lastAnswer);
      // console.log('findLastNumber()', findLastNumber());
      // console.log("-> playerNumber", playerNumber);
    } else if (findLastNumber() > randomNumber && findLastNumber() !== null && tryAmount > 0) {
      lastAnswer = prompt('Меньше! : ', findLastNumber());
      returnTry(tryAmount);
      playerNumber.push(lastAnswer);
      // console.log('findLastNumber()', findLastNumber());
      // console.log("-> playerNumber", playerNumber);
    } else if (tryAmount <= 0) {
      // console.log("-> tryAmount Попыток осталось ", tryAmount);
      return alert(`Ваши попытки закончились, осталось ${tryAmount}  - попыток`);
    } else if (lastAnswer === null) {
      console.log('-> playerNumber', playerNumber);
      return alert('Заходи еще!');
    }

    if (findLastNumber() === randomNumber) {
      console.log('-> playerNumber', playerNumber);
      // console.log(`playerNumber = randomNumber, ${lastAnswer} = ${randomNumber}`);
      // console.log("-> tryAmount Попыток осталось ", tryAmount);
      return alert(`Правильно! твой ответ: ${lastAnswer} совпал с моим: ${randomNumber}, Еще осталось попыток: ${tryAmount}`);
    }
    return gameCore();
  };
  gameCore();
};

newGame(); // Запуск игры
