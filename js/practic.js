// дз з практики:
// Перевірити два масиву і дізнатися, чи вони рівні

// const arr1 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr2 = [6, "dream", -30, 11, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// console.log(arraysAreEqual(arr1, arr2));

// const arr3 = [4, 232, 6, -30, "color", 324, "list", 1, 11, 9, "dream", 34, 0];
// const arr4 = ["color", 6, -30, 11, 9, 1, "dream", 324, 34, 4, 232, 0, "list"];

// const arr5 = [1, 4, 6, "color", "list", 11, 9, "dream", 34, 0, -30, "lesson"];
// const arr6 = [6, 324, "dream", -30, 9, 8, 34, "color", 4, 232, 0, "list", 11];

// const arr7 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr8 = [6, "dream", -30, 10, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function calculateAverage() {
//   if (arguments.length === 0) {
//     return "немає аргументів";
//   }

//   let sum = 0;
//   let countValidArgument = 0;

//   for (let i = 0; i < arguments.length; i += 1) {
//     if (typeof arguments[i] === "number") {
//       sum += arguments[i];
//       countValidArgument += 1;
//     }
//   }

//   if (countValidArgument === 0) {
//     return "жоден аргумент не є числом";
//   }
//   const average = sum / countValidArgument;
//   return average;
// }

// console.log(calculateAverage(2, 4, 6, 46, 115));
// console.log(calculateAverage(10, 15, 20, 25, 65, -1, -187));
// console.log(calculateAverage(1, "not a number", 3));
// console.log(calculateAverage());
// console.log(calculateAverage(false, "5", "w", undefined, "summer"));

// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа

// function min(a, b) {
//   if (isNaN(a) || isNaN(a)) {
//     return "not a number";
//   } else if (a > b) {
//     return `min: ${b}`;
//   } else if (a < b) {
//     return `min: ${a}`;
//   }
//   return `a=b`;
// }

// console.log(min(-2, 3));
// console.log(min(3, 3));
// console.log(min("hello", 3));

// TODO:==========Object=============
// TODO:==========Task-1=============

// Напиши скрипт, який для об'єкта user,
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'
// 3 замінити значення premium на false
// 4 виводити вміст об'єкта user у форматі
// ключ:значення використовуючи Object.keys() і for...of

// const user = {
//   userName: "Jon",
//   age: 42,
//   hobby: "football",
//   premium: true,
// };

// user.mood = `happy`;
// user.mood = `skydiving`;
// user.premium = false;

// // console.log(user);

// for (const key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`);
// }

//TODO:=========task-2=================

// Потрібно написати функцію, яка приймає 2 параметри obj і key,
// яка буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію, потім вирішимо
// простим способом

// const user = {
//   userName: "Jon",
//   age: 42,
//   hobby: "football",
//   premium: true,
// };

// function getBoolean(obj, key) {
//   const keys = Object.keys(obj);
//   return keys.includes(key);
// }

// console.log(getBoolean(user, "tablet"));
// console.log(getBoolean(user, "age"));

// const getBoolean = (obj, key) => Object.keys(obj).includes(key);

// const getBoolean = (obj, key) => key in obj;

// console.log(getBoolean(user, "age"));

//TODO:==========task-3=============

// У нас є об'єкт, у якому зберігатимуться зарплати
// нашої команди
// Напишіть код для сумування всіх зарплат і
// збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// let totalSalary = 0;
// for (const salary of Object.values(salaries)) {
//   totalSalary = +salary;
// }
// console.log(totalSalary);

//TODO:============task-4================

// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2.

// до виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// const multiplyNumeric = (obj) => {
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       if (typeof obj[key] === "number") {
//         obj[key] *= 2;
//       }
//     }
//   }
//   return obj;
// };

// console.log(multiplyNumeric(menu));

//TODO:=================task-04=============================

// Напиши функцію яка приймає масив чисел і повертає новий масив,
// унікальних чисел, які не повторюються.
// Є 2 варіанти виконання.
// const numbers = [1, 1, 1, 2, 3, 4, 7, 7, 6, 6, 5, 4, 23, 22, 22, 111, 1, 5];

// function uniqArray(arr) {
//   const uniq = {};
//   for (const number of arr) {
//     uniq[number] = number;
//   }
//   //   console.log(uniq);
//   return Object.values(uniq);
// }
// console.log(uniqArray(numbers));

// TODO:==========CALLBACK=============
//TODO:============task-01=========================

//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

//TODO:============task-02=========================

// Напишіть функцію, яка приймає два числа і колбек-функцію. Функція повинна помножити числа між собою та передати результат дії до колбек-функції. Колбек-функція повинна, у разі, якщо, це число є парним - помножити це число на себе, якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог.

//TODO:============task-03=========================

// Напишіть функцію, яка приймає масив і колбек-функцію. Функція повинна повернути перший елемент масиву,
//який задовольняє умову, визначену в колбек - функції. Якщо такого елементу немає, функція
// повинна повернути null. Також необхідно написати 2 різні колбеки. При використанні першого колбеку має
// повертатись перше парне число. При використанні другого - має повертатись перше слово у масиві, що починається з літери
// "O" у будь - якому реєстрі.

// const numbers = [1, 3, 5, 7, 9, 20];

// const words = ["apple", "banana", "orange", "pear"];

//TODO:=========ARRAY METODS=================

//TODO:=========task-01=================
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].

// const arr = [1, 2, 3, 4, 5];
// const powerArray = arr.map((item) => (item = Math.pow(item, 2)));
// console.log(powerArray);

//TODO:=========task-02=================

// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const newArray = data.flatMap((item) => item.values);

// console.log(newArray);
//TODO:=========task-03=================

// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const whoAnderTwenty = people.some((person) => person.age < 20);
// console.log(whoAnderTwenty);

//TODO:=========task-04=================

//  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.
// const numbers = [2, 4, 6, 8, 10];
// const isEven = numbers.every((number) => number % 2 === 0);
// console.log(isEven);

//TODO:=========task-05=================

// Знайдіть перше непарне число
// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const firstOdd = numbers.find((number) => number % 2 !== 0);
// console.log(firstOdd);

//TODO:=========task-06=================

// Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].
// const numbers = [4, 2, 5, 1, 3];
// // const arrByGrowth = [...numbers].sort();
// const arrByGrowth = [...numbers].sort((a, b) => a - b);
// console.log(arrByGrowth);

//TODO:===============task-07===============================

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const words = ["banana", "orange", "apple", "pear"];
// const res = [...words].sort((a, b) => a.localeCompare(b));
// console.log(res);

//TODO:=========task-08=================

// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const whoAnderTwenty = user.filter(({ age }) => age > 20);
// console.log(whoAnderTwenty);

//TODO:=========task-11=================

// Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод reduce для обчислення суми елементів масиву

// const numbers = [1, 2, 3, 4, 5];

// const totalSum = numbers.reduce((sum, number) => sum + number, 0);
// console.log(totalSum);

//TODO:===============task-12===============================важкувато!!!

/// Даний словник із міст та дат виступів рок-групи
/// Необхідно перетворити словник (key-value) на масив із назв міст
/// Виведення міст має бути у хронологічному порядку
/// Міста у яких концерт вже пройшов потрібно виключити
/// Результат ["Умань", "Харків", "Одеса"]

// const concerts = {
//   Київ: new Date("2020-04-01"),
//   Умань: new Date("2023-10-02"),
//   Вінниця: new Date("2020-04-21"),
//   Одеса: new Date("2023-12-15"),
//   Хмельницький: new Date("2020-04-18"),
//   Харків: new Date("2023-08-23"),
// };

// function concertsToArray(obj) {
//   return Object.keys(obj)
//     .filter((city) => obj[city] > new Date())
//     .sort((a, b) => obj[a] - obj[b]);
// }

// console.log(concertsToArray(concerts));

// ===================================================
// Отримати масив імен всіх користувачів (поле name).
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },

  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",

    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },

  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },

  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },

  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

// const people = users.map(({ name }) => name);
// console.log(people);

//TODO:==========================
// Отримати масив об'єктів користувачів за кольором очей (eyeColor).

// function userEye(obj, color) {
//   return obj.filter((item) => item.eyeColor === color);
// }
// console.log(userEye(users, "blue"));
// console.log(userEye(users, "green"));

//TODO:==========================
// Отримати масив імен користувачів за статтю (поле gender)

// const genderArray = (users, gender) => {
//   return users.filter((user) => user.gender === gender);
// };
// console.log(genderArray(users, "male"));

//TODO:==========================
// Отримати масив тільки неактивних користувачів (поле isActive).
// const isOnlineArray = (users) => users.filter((user) => user.isActive);
// console.log(isOnlineArray(users));
// console.log(users);

//TODO:==========================
// Отримати масив користувачів віком від min до max
// const usersByAge = (users, min, max) =>
//   users.filter(({ age }) => age >= min && age <= max);
// console.log(usersByAge(users, 25, 36));

//TODO:==========================
// Отримати загальну суму балансу (поле balance) всіх користувачів.
// const getTotalBalance = (users) =>
//   users.reduce((totalBalance, { balance }) => totalBalance + balance, 0);
// console.log(getTotalBalance(users));
//TODO:==========================
// Масив імен всіх користувачів, у яких є товариш із зазначеним ім'ям.
// const getFriends = (users, friend) =>
//   users.filter(({ friends }) => friends.includes(friend));
// console.log(getFriends(users, "Goldie Gentry"));
// console.log(getFriends(users, "Aisha Tran"));

//TODO:==========================
// Масив імен (поле name) людей, відсортованих залежно кількості їх друзів (поле friends)

// const peopleByFriends = (users) =>
//   [...users]
//     .sort(
//       (firstUser, secondUser) =>
//         firstUser.friends.length - secondUser.friends.length
//     )
//     .map((user) => user.name);

// console.log(peopleByFriends(users));

//TODO:==========================
// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не повинно бути
// Уміння, що повторюються, і вони повинні бути відсортовані в алфавітному порядку.

// const sortedSrills = (users) =>
//   users
//     .flatMap((user) => user.skills)
//     .filter((skill, index, arr) => arr.indexOf(skill) === index)
//     .sort((firstSkill, secondSkill) => firstSkill.localeCompare(secondSkill));

// console.log(sortedSrills(users));
