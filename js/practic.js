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
