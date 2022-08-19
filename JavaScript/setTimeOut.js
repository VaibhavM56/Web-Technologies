console.log("Start");

function add() {
  console.log("I am inside function");
  setTimeout(() => {
    console.log("i am inside add function set time out");
  }, 3000);
  setTimeout(() => {
    console.log("I am set time out 2 ");
  }, 6000);
}
add();

setTimeout(() => {
  console.log("I am set time outside the function ");
}, 0);
console.log("hello");
console.log("end");
