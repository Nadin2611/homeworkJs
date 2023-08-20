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
