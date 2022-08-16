console.log(30 + 30); //arithmetic operators
console.log(20 - 10);

let a = 20;
let b = a++; //the increment operator increments and returns the value before increment
let c = ++a; // it increments the value and returns the incremented value
console.log(b);
console.log(a);

//comparision operators

//>=,<=,===,>,<,!=

// == and ===

let num = 10;
let num2 = "10";
console.log(num == num2); // true because it will only check the value
console.log(num === num2); // false because it will check along with the datatype.

let x = 40;
let y = "50";

console.log(x < y); //weird javascript

let x1 = 40;
let y1 = "50";

console.log(x1 !== y1); //true, as both values are not equal and of different datatypes.

//ternary operator
let age = 12;

console.log(age >= 18 ? "eligible for voting" : "not eligible");

//w.a.p to display if the
//marks > 80;  print distinction,
//marks > 70;  first class,
//marks > 35; second class,
//marks < 35;  fail

let marks = 92;
console.log(
  marks >= 80
    ? "Distinction"
    : marks >= 70
    ? "First Class"
    : marks >= 35
    ? "Second Class"
    : "Fail"
);
