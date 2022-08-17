//global level this refers to window object
console.log(this);
console.log(window);

console.log(this === window);

//inside the object this refers to current object
const personObj = {
  firstName: "Akshatha",
  lastNmame: "Nayak",
  getFullName: function () {
    console.log(this);
    return this.firstName + " " + this.lastNmame;
  },
};

console.log(personObj.getFullName());

console.log("====xxxxx======");

let arr = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr == arr2); //false
console.log(arr === arr2); //false

console.log(null == 0); // false
console.log(null > 0); //false
console.log(null >= 0); //true

console.log(1 < 2 < 3); //true
// true < 3 --> true
console.log(3 > 2 > 1); //false
// true > 1 --> false
