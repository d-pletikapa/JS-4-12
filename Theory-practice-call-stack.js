'use strict';
console.log('Тренировка call stack - Стек вызовов');

const capitalize = str =>
  str[0].toUpperCase() + str.slice(1).toLowerCase();

const getFullName = ({firstname, surname}) =>
  `${capitalize(firstname)} ${capitalize(surname)}`;

const printFullName = arr => {
  arr.forEach(item => void console.log(getFullName(item)));
};

const listPerson = [
  {
    firstname: 'сергей',
    surname: 'попов',
  },
  {
    firstname: 'АЛександр',
    surname: 'иванов',
  },
  {
    firstname: 'Олег',
    surname: 'ПЕТРОВ',
  },
];

printFullName(listPerson);
