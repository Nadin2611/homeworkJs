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

// function slugify(title) {
//   const slug = title.toLowerCase().split(" ").join("-");

//   return slug;
// }

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// function filteredArray(arr, elem) {
//   let newArr = [];
//   // Змініть код лише під цим рядком
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i].indexOf(elem) === -1) {
//       newArr.push(arr[i]);
//     }
//   }
//   // Змініть код лише над цим рядком
//   return newArr;
// }

// console.log(
//   filteredArray(
//     [
//       [3, 2, 3],
//       [1, 6, 3],
//       [3, 13, 26],
//       [19, 3, 9],
//     ],
//     3
//   )
// );

// // вкладки – це масив заголовків до кожного сайту, відкритого у вікні
// const Window = function (tabs) {
//   this.tabs = tabs; // Ми зберігаємо записи про масив всередині об'єкта
// };

// // Коли ви об'єднуєте два вікна в одне
// Window.prototype.join = function (otherWindow) {
//   this.tabs = this.tabs.concat(otherWindow.tabs);
//   return this;
// };

// // Коли ви відкриєте нову вкладку в кінці
// Window.prototype.tabOpen = function (tab) {
//   this.tabs.push("new tab"); // Давайте поки відкриємо нову вкладку
//   return this;
// };

// // Коли ви закриєте вкладку
// Window.prototype.tabClose = function (index) {
//   // Змініть код лише під цим рядком

//   const tabsBeforeIndex = this.tabs.splice(0, index); // Отримайте вкладки перед вкладкою
//   console.log(tabsBeforeIndex);
//   const tabsAfterIndex = this.tabs.splice(1); // Отримайте вкладки після вкладки
//   console.log(tabsAfterIndex);
//   this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // З'єднайте їх разом

//   // Змініть код лише над цим рядком

//   return this;
// };

// // Давайте створимо три вікна браузера
// const workWindow = new Window([
//   "GMail",
//   "Inbox",
//   "Work mail",
//   "Docs",
//   "freeCodeCamp",
// ]); // Ваша поштова скринька, диск та інші робочі сторінки
// const socialWindow = new Window([
//   "FB",
//   "Gitter",
//   "Reddit",
//   "Twitter",
//   "Medium",
// ]); // Соціальні сторінки
// const videoWindow = new Window(["Netflix", "YouTube", "Vimeo", "Vine"]); // Розважальні сайти

// // Тепер виконайте закриття, відкриття вкладки та інші операції
// const finalTabs = socialWindow
//   .tabOpen() // Відкрийте нову вкладку для мемів з котами
//   .join(videoWindow.tabClose(2)) // Закрийте третю вкладку у вікні відео та приєднайтеся
//   .join(workWindow.tabClose(1).tabOpen());
// console.log(finalTabs.tabs);

// TODO=========================6==================================
// // Глобальна змінна
// const bookList = [
//   "The Hound of the Baskervilles",
//   "On The Electrodynamics of Moving Bodies",
//   "Philosophiæ Naturalis Principia Mathematica",
//   "Disquisitiones Arithmeticae",
// ];
// console.log(bookList);
// // Змініть код під цим рядком
// function add(bookList, bookName) {
//   let newBookList = [...bookList];
//   newBookList.push(bookName);
//   return newBookList;
//   // Змініть код над цим рядком
// }
// console.log(bookList);
// // Змініть код під цим рядком
// function remove(bookList, bookName) {
//   let newBookList = [...bookList];
//   const book_index = newBookList.indexOf(bookName);
//   if (book_index >= 0) {
//     newBookList.splice(book_index, 1);
//     return newBookList;

//     // Змініть код над цим рядком
//   }
// }

// console.log(add(bookList, "A Brief History of Time"));
// console.log(remove(bookList, "On The Electrodynamics of Moving Bodies"));
// console.log(bookList);

// TODO===========================================================
// // Глобальна змінна
// const watchList = [
//   {
//     Title: "Inception",
//     Year: "2010",
//     Rated: "PG-13",
//     Released: "16 Jul 2010",
//     Runtime: "148 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer: "Christopher Nolan",
//     Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     Language: "English, Japanese, French",
//     Country: "USA, UK",
//     Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.8",
//     imdbVotes: "1,446,708",
//     imdbID: "tt1375666",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Interstellar",
//     Year: "2014",
//     Rated: "PG-13",
//     Released: "07 Nov 2014",
//     Runtime: "169 min",
//     Genre: "Adventure, Drama, Sci-Fi",
//     Director: "Christopher Nolan",
//     Writer: "Jonathan Nolan, Christopher Nolan",
//     Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: "English",
//     Country: "USA, UK",
//     Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.6",
//     imdbVotes: "910,366",
//     imdbID: "tt0816692",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "The Dark Knight",
//     Year: "2008",
//     Rated: "PG-13",
//     Released: "18 Jul 2008",
//     Runtime: "152 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer:
//       "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     Language: "English, Mandarin",
//     Country: "USA, UK",
//     Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     Metascore: "82",
//     imdbRating: "9.0",
//     imdbVotes: "1,652,832",
//     imdbID: "tt0468569",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Batman Begins",
//     Year: "2005",
//     Rated: "PG-13",
//     Released: "15 Jun 2005",
//     Runtime: "140 min",
//     Genre: "Action, Adventure",
//     Director: "Christopher Nolan",
//     Writer:
//       "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     Language: "English, Urdu, Mandarin",
//     Country: "USA, UK",
//     Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     Metascore: "70",
//     imdbRating: "8.3",
//     imdbVotes: "972,584",
//     imdbID: "tt0372784",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Avatar",
//     Year: "2009",
//     Rated: "PG-13",
//     Released: "18 Dec 2009",
//     Runtime: "162 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "James Cameron",
//     Writer: "James Cameron",
//     Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     Language: "English, Spanish",
//     Country: "USA, UK",
//     Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     Metascore: "83",
//     imdbRating: "7.9",
//     imdbVotes: "876,575",
//     imdbID: "tt0499549",
//     Type: "movie",
//     Response: "True",
//   },
// ];

// // Змініть код лише під цим рядком

// const ratings = watchList.map((film) => ({
//   title: film.Title,
//   rating: film.imdbRating,
// }));

// // Змініть код лише над цим рядком

// console.log(JSON.stringify(ratings));

// TODO==========================MAP=================================
// Array.prototype.myMap = function (callback) {
//   const newArray = [];
//   // Змініть код лише під цим рядком
//   for (let i = 0; i < this.length; i += 1) {
//     newArray.push(callback(this[i], i, this));
//   }
//   // Змініть код лише над цим рядком
//   return newArray;
// };

// console.log([23, 65, 98, 5, 13].myMap((item) => item * 2));

// const filteredList = watchList
//   .map((film) => ({
//     title: film.Title,
//     rating: film.imdbRating,
//   }))
//   .filter((film) => Number(film.rating) > 8.0);

// console.log(filteredList);

// TODO================FILTER===========================================

// Array.prototype.myFilter = function (callback) {
//   const newArray = [];
//   // Змініть код лише під цим рядком
//   for (let i = 0; i < this.length; i += 1) {
//     if (callback(this[i], i, this)) {
//       newArray.push(this[i]);
//     }
//   }
//   // Змініть код лише над цим рядком
//   return newArray;
// };

function nonMutatingSplice(cities) {
  return cities.slice(0, 3);
}

console.log(
  nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])
);
