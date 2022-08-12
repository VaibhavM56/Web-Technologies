// String methods

var str = "Test yantra";
str.toUpperCase();
console.log(str); // string is immutable

var str = "Test yantra";
var upper = str.toUpperCase();
console.log(upper); // TEST YANTRA

var greet = "Good Morning";
var greet = greet.toLowerCase();
console.log(greet); // good morning

console.log(greet.charAt(11));
// this method will accept index position as its argument. And return the character to the index.

console.log(greet.indexOf("o"));
// 1 -->

// includes
var wishing = "Good Afternoon";
console.log(wishing.includes("noon")); // returns 1. includes method will take a part of the string and and check whether it is present in the string or not. It will return boolean values.

// replace(remove, replace)
console.log(wishing.replace("Afternoon", "Morning")); // Good Morning. replace method takes the string to be replaced and the string to be replaced with as arguments and prints the new string.

console.log(wishing); // Good Afternoon. The upper methods won't change the value as string is immutable.

// sub str(deprecated method)--> takes two arguments first is index value and second is no. of values

var data = "Welcome to javascript world";
const substr = data.substr(9, 5);
console.log(substr); // 0 jav

// sub string --> takes two arguments both index of the string, out of which whichever is greater index is exclusive.

var substring = data.substring(9, 4);
console.log(substring); // ome t

var email = "               abc@gmail.com        ";
console.log(email);
console.log(email.trim());
// trim method removes the white spaces
