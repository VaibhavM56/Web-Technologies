//for loop
//does not work with objects
//does not ignore empty elements
//break statements is not supported

let arr = [20, "megha", " ", , 78, , 69, 90];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//for of loop
//does not work with objects
// does not ignore empty elements
//break statements is not supported

for (let i of arr) {
  console.log(i);
}

//2

let students = [
  "Avi",
  "Akshata",
  "Namana",
  "Nayana",
  "Nuthana",
  "Prajwal",
  "Vaibhav",
  "Himagirish",
];

for (let i of students) {
  console.log(i);
}

let fruits = ["Strawberry", "Pineapple", "Litchi", "Kivi", "Apple", "Mango"];
fruits["20"] = ["Pineapple"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let pens = [
  {
    brand: "reynolds",
    color: "pink",
    price: 3,
    type: "gel",
  },
  {
    brand: "cello",
    color: "blue",
    price: 5,
    type: "ball point",
  },
  {
    brand: "parker",
    color: "black",
    price: 500,
    type: "ball point",
  },
  {
    brand: "bright",
    color: "red",
    price: 2,
    type: "ball point",
  },
];

// print the pens whos price > 5rs

for (let i = 0; i < pens.length; i++) {
  if (pens[i].price > 5) {
    console.log(pens[i]);
  }
}

// using ternary operator

for (let i = 0; i < pens.length; i++) {
  pens[i].price >= 5 ? console.log(pens[i]) : console.log("price lower than 5");
}

//using for of loop(here i is the element not index)
for (let i of pens) {
  if (i.price > 5) {
    console.log([i]);
  }
}

//price > 5 && type:ballpoint

//using for of loop
for (let i of pens) {
  if (i.price > 5 && i.type === "ball point") {
    console.log([i]);
  }
}

//for in loop
//works with objects as well as arrays
//it ignores empty elements
//it does not ignore extra properties which don't have index

let person = {
  firstname: "Vaibhav",
  lastname: "Mishra",
  gender: "male",
  phNumber: 7896541230,
};

for (let key in person) {
  console.log(key);
}

for (let key in person) {
  console.log(`${key}-${person[key]}`);
}

//ballpoint && price > 5

for (let key1 in pens) {
  if (pens[key1].price > 5 && pens[key1].type === "ball point") {
    console.log(pens[key1]);
  }
}

//this loops omits where the value is undefined
for (let value in arr) {
  console.log("this is for loop " + arr[value]);
}
