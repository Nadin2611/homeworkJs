// TODO=========================1==================================

// class Blogger {
//   constructor({ email, age, numberOfPosts, topics }) {
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }
//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }
//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }
// const mango = new Blogger({
//   name: "mango@mail.com",
//   age: 24,
//   numberOfPosts: 20,
//   topics: ["tech", "cooking"],
// });
// const poly = new Blogger({
//   name: "poly@mail.com",
//   age: 19,
//   numberOfPosts: 17,
//   topics: ["sports", "gaming", "health"],
// });

// console.log(mango.getInfo());
// mango.updatePostCount(5);
// console.log(mango.numberOfPosts);
// poly.updatePostCount(4);
// console.log(poly.getInfo());
// console.log(poly.numberOfPosts);

// TODO=========================2==================================

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     if (!this.items.includes(item)) {
//       return this.items.push(item);
//     }
//   }
//   removeItem(item) {
//     const index = this.items.indexOf(item);
//     if (this.items.includes(item)) {
//       this.items.splice(index, 1);
//     }
//   }
// }

// const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

// const items = storage.getItems();
// console.table(items);

// storage.addItem("🍌");
// console.table(storage.items);

// storage.removeItem("🍋");
// console.table(storage.items);

// TODO=========================3==================================
// class User {
//   #login;
//   #email;
//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({ login: "Mango", email: "mango@dog.woof" });
// console.log(mango.login);
// mango.login = "Mangodoge";
// console.log(mango.login);

// const poly = new User({ login: "Poly", email: "poly@mail.com" });
// console.log(poly.login);
// poly.login = "Polycutie";
// console.log(poly.email);

// TODO=========================4==================================

// class Notes {
//   static Priority = {
//     LOW: "low",
//     NORMAL: "normal",
//     HIGH: "high",
//   };
//   constructor({ notes }) {
//     this.items = notes;
//   }
//   addNote(note) {
//     if (!this.items.includes(note)) {
//       this.items.push(note);
//     }
//   }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: "Моя перша замітка", priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// // Налаштування
// const recordCollection = {
//   2548: {
//     albumTitle: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"],
//   },
//   2468: {
//     albumTitle: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"],
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [],
//   },
//   5439: {
//     albumTitle: "ABBA Gold",
//   },
// };

// // Змініть код лише під цим рядком

// function updateRecords(records, id, prop, value) {
//   if (value === "") {
//     delete records[id][prop];
//     console.log(records[id][prop]);
//   } else if (prop !== "tracks") {
//     records[id][prop] = value;
//   } else if (prop === "tracks" && value != "") {
//     records[id][prop] = records[id][prop] || [];

//     records[id][prop].push(value);
//   }
//   return records;
// }

// console.log(
//   updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
// );

// Налаштування
// const myArr = [2, 3, 4, 5, 6];

// // Змініть код лише під цим рядком
// let total = 0;
// for (let i = 0; i < myArr.length; i++) {
//   console.log(i);
//   total = total + myArr[i];
// }

// console.log(total);

// function multiplyAll(arr) {
//   let product = 1;
//   // Змініть код лише під цим рядком
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       product = product * arr[i][j];
//     }
//   }
//   // Змініть код лише над цим рядком
//   return product;
// }

// console.log(
//   multiplyAll([
//     [1, 2],
//     [3, 4],
//     [5, 6, 7],
//   ])
// );

// function sum(arr, n) {
//   // Змініть код лише під цим рядком
//   if (n <= 0) {
//     return 0;
//   } else {
//     return sum(arr, n - 1) + arr[n - 1];
//     // Змініть код лише над цим рядком
//   }
// }

// // Налаштування
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   for (let i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === name) {
//       if (contacts[i][prop] !== undefined) {
//         return contacts[i][prop];
//       } else {
//         return "No such property";
//       }
//     }
//   }
//   return "No such contact";
// }

// console.log(lookUpProfile("Akira", "likes"));
// console.log(lookUpProfile("Kristian", "lastName"));
// console.log(lookUpProfile("Akira", "likes"));

// function convertToInteger(str) {
//   return parseInt(str);
// }
// console.log(convertToInteger("56"));

// ========================================
// function rangeOfNumbers(startNum, endNum) {
//   if (startNum > endNum) {
//     return [];
//   } else {
//     const countArray = rangeOfNumbers(startNum, endNum - 1);
//     countArray.push(endNum);
//     return countArray;
//   }
// }
// console.log(rangeOfNumbers(4, 38));

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true
