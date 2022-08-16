//date object

const systemDate = new Date();
console.log(systemDate);
console.log(systemDate.getDay()); //return a number for eg. It returns 2 for tuesday. it starts from 0.
console.log(systemDate.getMonth());
console.log(systemDate.getTime());
console.log(systemDate.getFullYear());
console.log(systemDate.getDate());
console.log(systemDate.getMinutes());

const dateString = new Date("dec/21/2021");
console.log(dateString);
console.log(dateString.getDay());

const date1 = new Date("dec/22/2021");

let month = date1.getMonth();
console.log(month);
let dateValue = date1.getDate();
console.log(dateValue);
let year = date1.getFullYear();
console.log(year);

const fullYear = `${month + 1}/${dateValue}/${year}`;
console.log(fullYear);

//Tuesday / August / 2022;
// use toLocaleDateString();

let date2 = systemDate.toLocaleDateString("en-in", {
  weekday: "long",
  month: "long",
  year: "numeric",
  day: "2-digit",
});

console.log(date2);

const date3 = new Date("feb / 05 / 2022");
let dayValue = date3.toLocaleDateString("en-in", {
  weekday: "long",
});

let dateValue1 = date3.toLocaleDateString("en-in", {
  day: "2-digit",
});
let monthValue = date3.toLocaleDateString("en-in", {
  month: "long",
});

let yearValue = date3.toLocaleDateString("en-in", {
  year: "numeric",
});

const fullDate = `${dayValue},${dateValue1}/${monthValue}/${yearValue}`;
console.log(fullDate);

//looping for loop

let person = ["Avi", 90, "30/july/2000"];

for (let i = 0; i < person.length; i++) {
  console.log(person[i]);
}
