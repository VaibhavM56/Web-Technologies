console.log("outside the function a", a); // undefined 20
var a = 20;
var b = 30; //global variable

console.log("outside the function b", b); //30

//variable hoisting inside the function
function test() {
  console.log("b inside the function ", b); //undefined
  var b = 10; //inside the function local variable will have more preferrence
  console.log("a inside the function", a); //20
  console.log(b);
}
test();

//hoisting: = hoisting is a technique which moves variables
//and function declaration to the top of there scope before
//code execution begins

//function hoisting is only possible for named functions
addEventListener(2, 4);

var name = "megha";

function add(a, b) {
  console.log(a + b);
}

greet(); //in this case it behaves like variable hoisting

var greet = function () {
  console.log("Good Morning");
};
