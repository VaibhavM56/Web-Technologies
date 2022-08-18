let myArray = [20, 30, 2, 4, 6, 7, 8];
//push method
//push method will add an element at the end
//it will take a value
//it will return a new array, if we pushed any value else it will return length of the array
// it will change the length of an array

myArray.push(50); // adds one element at the end
console.log(myArray);
myArray.push(60, 70, 80, 90);
console.log(myArray);

console.log(myArray.push()); //12; returns length of array

//pop method will not take anything as argument
//pop method will remove the last element of an array.

myArray.pop();
console.log(myArray);

//pop method will return the removed items
console.log(myArray.pop()); //80;

//inserting elements using for
let arr = [];
for (let i = 1; i < 51; i++) {
  arr.push(i);
}
console.log(arr);

// unshift is used to add an element in the beginning
// it will take an element to add to the array as an argument
// unshift method will return the length of an array

let fruits = ["Apple", "Grape", "Mango", "Orange"];
fruits.unshift("Lemon");
console.log(fruits);

//shift is used to remove an element at the beginning
//it will not take any argument
//it will return the removed elements

console.log(fruits.shift());
console.log(fruits);

//concat method will join two or more arrays
//it will return a joined new array
//concat method will not change our original array
let a = [20, 30, 40];
let b = [1, 2, 3];
let c = [4, 5, 6];
let res = a.concat(b, c);
console.log(res, "array");

const arr1 = [1, 2, [7, 8]];
const arr2 = [[4, 5], 6, 8, 9];
const arr3 = arr1.concat(arr2);
console.log(arr3, "nested array");

//flat
//flat method will make nested arrays as single array
console.log(arr1.flat());

//join method will convert array to string
const citys = ["bangalore", "kolar", "Tumkur", "Hubli"];

let string = citys.join(" ");
console.log(string);

//findIndex and indexOf
//findIndex method will take a callback function
//It will return the index of element which satisfies the condition.

let arrayData = [9, 10, 19, 20, 18];

let x = arrayData.findIndex((age) => {
  return age > 18;
});
console.log(x);

//or

// function votingEligibility(age){
//     return age > 18;
// }

// let x = arrayData.findIndex(votingEligibility);
// console.log(x);

//indexOf
//the indexOf method will return the first index position of the specified value
//indexOf method return -1 if our array does not have the specified value
console.log(arrayData.indexOf(70)); //-1,not found
console.log(arrayData.indexOf(20)); //returns the first matching index
//the second argument gives the starting point.
console.log(arrayData.indexOf(20, 2));

console.log(typeof arrayData);
let e = 78;
console.log(Array.isArray(arrayData)); //true, isArray method will return me boolean

//to convert string to an array
let data = "hello java script";
let arrData = data.split(" ");
console.log(arrData);

let lamda = "Before a good leader be a good human";

let arr4 = lamda.split(" ");
console.log(lamda.indexOf("leader"));
arr4.reverse();
console.log(arr4);
// let d = 0;
// for (let i = lamda.length - 1; i >= 0; i--) {
//   arr5.push(arr4[i]);
// }

// for (let i = lamda.length - 1; i >= 0; i--) {

// }
// console.log(arr5);//reverses letter by letter so use string.

//to reverse an array we need to use reverse() in javascript.
//OR
let arr5 = lamda.split(" ");
let reverse = "";
for (let i = arr5.length - 1; i--; ) {
  reverse += arr5[i] + " ";
}
console.log(reverse);

//map();forEach();filter();
//map
//map method takes a callback function(value,index,original array)
//we use map method to loop an array
arr5.map((value, index, arr) => {
  console.log(value, index);
});

arr5.filter((value, index, arr) => {
  console.log(value, "filter");
});

let filterArr = [20, 30, 50, 60, 80, 12, 17];

filterArr.filter((value, ind, arr) => {
  if (value > 20) {
    console.log(value);
  }
});

let filtered = filterArr.filter((value) => {
  return value + 10;
}); // no change in output

let mapped = filterArr.map((value) => {
  return value + 10;
}); //10 extra will be added to the values

console.log(filtered);
console.log(mapped);

//forEach
let hobbies = [
  "cricket",
  "badminton",
  "carrom",
  "cooking",
  "gardening",
  "shuttle",
];

hobbies.forEach(function (val, ind, arr) {
  console.log(`${val}-${ind}`);
});

//includes
console.log(hobbies.includes("cricket")); //true,it returns boolean
console.log(hobbies.includes("creet")); //false,it returns boolean
