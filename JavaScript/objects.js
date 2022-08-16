var name = "Vaibhav";

// there are two ways you can create your objects
// objects are the collection of the key and value pairs
// 1 -->

var obj = {
  name: "Vaibhav",
  PhNo: 9876542103,
  address: "Bangalore",
};

var obj2 = {};
obj2.color = "red";
console.log(obj2.color);

console.log(obj);

// 2-->

var obj1 = new Object(); // creating object using new key word
obj1.name = "Vanity";
obj1.PhNo = 7894563210;
obj1.age = 20;
console.log(obj1);

console.log(obj1.color);
