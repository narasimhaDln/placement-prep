// 1st question answers
// function fetchData() {
//   Promise.resolve().then(() => {
//     console.log("Task 3");
//   });
//   setTimeout(() => {
//     console.log("Task 1");
//   }, 0);
//   console.log("Task 2");
//   Promise.resolve().then(() => {
//     console.log("Completed");
//   });
// }
// fetchData();
// console.log("A");
// setTimeout(() => console.log("B"), 1000);
// Promise.resolve().then(() => console.log("C"));//promise is resolved so that after executing console.log then it will execute
// console.log("D");
//Async and await is used to handle the asynchronous program to synchronous code for more readable
// fetch("<https://jsonplaceholder.typicode.com/posts>")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));
// //by using the async and await
// const fetchPost = async function () {
//   try {
//     const response = await fetch("Api url");
//     const data = response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("error");
//   }
// };
// fetchPost();
// async function fetchData() {
//   try {
//     const response = fetch("invalid-url");
//     console.log(await response.json());
//   } catch (error) {
//     console.log("error");
//   }
// }
// fetchData();
// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 2000);
//   });
// }
// async function asyncCall() {
//   console.log("calling");
//   const result = await resolveAfter2Seconds();
//   console.log(result);
// Expected output: "resolved"
// }
// function executeAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 3000);
//   });
// }
// async function asyncCall() {
//   console.log("calling");
//   let data = await executeAfter2Seconds();
//   console.log(data);
// }

// asyncCall();
//destructuring
// const person = {
//   name: "Alice",
//   address: {
//     city: "Wonderland",
//     zip: 12345,
//   },
// };

// const {
//   name,
//   address: { city, zip },
// } = person;
// console.log(name, city, zip);
// const {
//   a,
//   b: { c },
// } = { a: 1, b: { c: 3 } };
// // console.log(a, c);

//default value destructuring
// const { name = "Alice" } = { name: undefined };
// console.log(name);
// const { name = "Alice" } = { name: null };
// console.log(name);
// const { name = "bob" } = { name: undefined };
// console.log(name);

// spreading the elements///it is used to expand the array and object into induvisual elements and used to copying and merging the two arrays and objects
// let a1 = [1, 2, 3, 4];
// let a2 = [5, 6, 7, 8];
// let merge = [...a1, ...a2];
// console.log(merge);
// const obj1 = { a: 1 };
// const obj2 = { a: 2, b: 3 };
// const merged = { ...obj1, ...obj2 };
// console.log(merged);
// let a1 = [1, 2];
// let a2 = [2, 3];
// let arr = [...a1, ...a2];
// const updated = [...new Set(arr)];
// console.log(updated);
// // let res = [];
// for (let i = 0; i < arr.length; i++) {
//   let dup = false;
//   for (let j = 0; j < res.length; j++) {
//     if (arr[i] === res[j]) {
//       dup = true;
//       break;
//     }
//   }
//   if (dup === false) {
//     res.push(arr[i]);
//   }
// }
// console.log(res);

// rest parameter
// function multiply(...nums) {
//   return nums.reduce((prod, num) => prod + num, 0); //it will work the because of only work
// }
// console.log(multiply(1, 2, 3, 4));
// function multiply(...nums) {
//   return nums.reduce((prod, num) => prod * num, 1); //0*anyhting its zero that make sure to pass an arguments into 1
// }
// console.log(multiply(1, 2, 3, 4));
// function max(...numbers) {
//   return Math.max(...numbers);
// }
// console.log(max(1, 2, 3, 4));
const add = (a, b, c) => a + b + c;

const curriedAdd = add(1, 2, 3);
console.log(curriedAdd);
