// debugger;
console.log(student); //undefined

var student = "Vaibhav";
var student = 35;
console.log(student); //35

// to avoid these confilicts we have let and const keywords
//are introduced in ES6.

var d;

console.log(a); //undefined
console.log(b); //undefined
console.log(c); //undefined
var a = 10;
var b = 20;
var c = 30;
console.log(a); //10
console.log(b); //20
console.log(c); //30

//Shifting the variables ablove the log is called hosting

//let and const
// console.log(sec);//undefined

// temporal dead zone is a time between variable declaration and variable initialization
// you cannot access the variables until they are assigned with some value.

let sec = "b";

//console.log(number2);
const number2 = 56;
let x = 10;
console.log(x);
//let x = 20;//if let keyword are used redeclaring of variables is not possible.

let m = 20;
x = m;
console.log(x);

//reinitialization of variable is possible in let.

const y = 50;
console.log(y);
//y = m;
console.log(y);
//if it is the const keyword, reinitialization and redeclaration is not possible

//console.log(num);//error
//const num = 20;

const num = 30;
let num2 = 20;

num = num2; //error //reinitialization
console.log(num2);
