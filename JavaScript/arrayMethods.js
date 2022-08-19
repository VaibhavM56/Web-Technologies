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

//find
//find method will take a callback function
//returns the first element that matches condition
let arrFind = [30, 1, 4, 5, 9, 65, 8, 4];

const found = arrFind.find((value) => value > 10);
console.log(found);

//sort()
//it will consider the values as string so,without argument it will sort according to string(0-9)
//It will take call back function
//it will arrange an element in an ascending or desceding order
//it will change the original array
//sort without callback function (string)
arrFind.sort();
console.log(arrFind, "0-9 order as string");

//with callback function
//descending order
arrFind.sort((a, b) => {
  return b - a;
});
console.log(arrFind, "descending order");

//Ascending order
arrFind.sort((a, b) => {
  return a - b;
});
console.log(arrFind, "ascending order");

//splice method
//we use splicce method to add or remove the elements in mid of the array
//it will affect your original array
//it returns the removed elements if any element is removed
//arrayData.splice(start-index,no.of elements to be removed,new elements to be added in their place)

let spliceArray = [2, 4, 7, 3, 5, 6, 8, 9, 10];

let splicedArray = spliceArray.splice(3, 2, 56, 78);
console.log(spliceArray);
console.log(splicedArray); //splice method will return the deleted elements

//adding element without deletion
let splicedArray1 = spliceArray.splice(3, 0, 30, 50);
console.log(spliceArray);
console.log(splicedArray1); // if no element is removed empty array will come.

//slice method
//slice method will return the new array
//it will take two arguments start 0
// to delete an element in mid of the array

let sliceArray = ["CIT", "SSIT", "KIT", "NIST", "Christ"]; //original array

const data2 = sliceArray.slice(1); //ssit kit nist,christ
const data3 = sliceArray.slice(2); //KIT,NIST,christ
const data4 = sliceArray.slice(2, 4); //first argument is excluded and second argument excluded
const data5 = sliceArray.slice(-2);
const data6 = sliceArray.slice(2, -1);

console.log(sliceArray, "original array");
console.log(data2);
console.log(data3);
console.log(data4);
console.log(data5);
console.log(data6);
