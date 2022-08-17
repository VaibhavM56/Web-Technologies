console.log(typeof NaN); //number
//named function
//named function syntax
// function funcName(parameter){
//     satements
// }

function add(a, b) {
  return a + b;
} //function declaration

add(2, 7); //function call

//Annonymous function

//syntax
//let x=function(){
//    statements
//}

let annon = function (a) {
  return a * a;
}; //function expression

annon(3); //9
console.log(annon(3));
//or
//let x = annon(3);
//console.log(x);//9

//Arrow finctions i is a ES^ feature
let ArrowFun = (arguments) => {
  //statements
};

ArrowFun();

//immediately invoked function

// (function (arguments) {
//   statements
// })();

function addition(a, b) {
  let sum = a + b;
  console.log(`sum of ${a} and ${b} is `, sum);
}

addition(4, 5);
addition(3, 5);
addition(6, 8);

//passing function as an argument to another function
//CallBack functions

function findIsEligibleForVoting(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

let result = findIsEligibleForVoting(21);

function printEligibleOrNot(arg) {
  if (arg === true) {
    console.log("eligible for voting");
  } else {
    console.log("not eligible for voting");
  }
}

printEligibleOrNot(result);

// function addition(a, b) {
//     let sum = a + b;
//     return sum;
//   }

//   addition(4, 5);
//   addition(3, 5);
//   let x = addition(6, 8);
//   console.log(addition(x, 4));

//immediately invoked function
(function substraction(a, b) {
  let sum = a - b;
  console.log(sum);
})(5, 3);

//when you have a single line in your function body , no need to use curly braces.
let product = (a) => a * a;
console.log(product(4));

//if you have only one argument no need of parenthesis and curly braces
let square = (b) => b * b;
square();

//if we don't have parameter then parenthesis is mandatory
let names = () => console.log("data is safe in arrow function");
names();
