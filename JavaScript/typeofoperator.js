//typeof operator

const name = "Megha";

console.log(typeof name);
let num = 20;
console.log(typeof num);

const data = {
  name: "Vaibhav",
  sec: "c",
  sal: 400000,
};

console.log(typeof data);

const arr = [1, 2, 3, 4, 5, 6];
console.log(typeof arr); //object

//concatenation operator

console.log("Hello" + " " + "World"); //Hello World
console.log(5 + 5 + "Hello"); //10Hello
console.log("5" + 5 + "Hi every one"); //55Hi every one
console.log(5 + "5" + "good after noon"); //55good after noon

console.log("Number" + "10" + 30 + 40 + "are not correct"); //Number103040are not correct, if the numbers are surrounded by strings on both side it will be concatenated.
