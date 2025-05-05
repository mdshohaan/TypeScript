"use strict";
// const test = "Hello";
// const ageName: [number, string] = [1, "ss"];
// const user: {
//   company: "Programming hero"; // literal types
//   firstName: string;
//   middleName?: string; // optional types
//   lastName: string;
// } = {
//   company: "Programming hero",
//   firstName: "Mohammad",
//   lastName: "Islam",
// };
// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }
// add(2, 2);
// const poorUser = {
//   name: "ARif",
//   isBalance: 0,
//   addBalance(balance: number): string {
//     return `My new Balance is ${this.isBalance + balance}`;
//   },
// };
const arr = [1, 2, 3];
const newArr = arr.map((ele) => ele * ele);
const bros1 = ["A", "B", "C"];
const bros2 = ["D", "E", "F"];
bros1.push(...bros2);
console.log(bros1);
