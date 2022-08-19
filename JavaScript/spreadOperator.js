//... three magical dots
//SpreadOperator

//rest Operator
// it will allow us to add varing arguments to functions
function add(...a) {
  let sum = 0;
  for (let i of a) {
    sum = sum + i;
  }
  console.log(sum);
  return sum;
}

add(20, 30); //
add(20, 2, 3, 4); //
add(1, 2, 3, 4, 5, 6, 7, 8, 90, 8, 8, 8, 7, 7, 5, 5, 3);

//primitive types are copied by values
let x = 30;
let y = x + 10;
console.log(y); //40
console.log(x); //30

//reference types are copied by reference
let m = {
  name: "Avi",
  phnumber: 9874563210,
  age: 22,
};

//spread operator
let n = { ...m };
m.name = "Vaibhav";
n.age = 25;
console.log(n); //name:"avi",phnumber:9874563210,age:25
console.log(m); //name:"Vaibhav",phnumber:9874563210,age:22

let person = {
  fName: "Nayana",
  lName: "S R",
  moreDetails: {
    bloodGroup: "A+",
    gender: "female",
  },
  dob: "5th Jan",
};

let personCopy = { ...person }; //shallow copy,if the object is nested it will only copy of the first layer
person.fName = "Nuthana";

let deepCopy = {
  ...person,
  moreDetails: { ...person.moreDetails },
  moreDetails: { ...person.moreDetails.address },
};

person.moreDetails.bloodGroup = "AB+"; //deep copy
console.log(person); //fName:"Nuthana" bloodgroup:AB+
console.log(personCopy); //fName:"Nayana" bloddgroup:A+

//deep copy will copy all the levels or object
//new object will created with new reference

//JSON.parse():this will convert json to js object
//JSON.stringify will convert from object to JSON object

const personCopyJson = JSON.parse(JSON.stringify(person));
console.log(personCopyJson);

//destructuring

let person2 = {
  name: "Avi",
  ph: 2344455,
  address: "Tumkur",
  email: "avi@gmail.com",
};

let { name, ph, address, email } = person2;
console.log(name);

const [a, b] = [23, 45]; //array sestructuring
console.log(a);
