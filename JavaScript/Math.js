//math object
//min method will accept the list of values as argument and returns
//the minimum value among the list of values

let minNumber = Math.min(12, 20, 1, 3, 8, 4, 100, 1, 89);
console.log(minNumber);

let maxNumber = Math.max(12, 20, 1, 3, 8, 4, 100, 1, 89);
console.log(maxNumber);

// to find the power
let powOfNumber = Math.pow(2, 3);
console.log(powOfNumber);

//floor

let floorValue = Math.floor(20.9);
console.log(floorValue);

let ceilValue = Math.ceil(20.5);
console.log(ceilValue);

let randomValue = Math.random();
console.log(randomValue);

let names = [
  "Avi",
  "Akshata",
  "Namana",
  "Nayana",
  "Nuthana",
  "Prajwal",
  "Vaibhav",
  "Himagirish",
];

let randomIndex = Math.floor(Math.random() * 8);
console.log(randomIndex);
console.log(names[randomIndex]);
