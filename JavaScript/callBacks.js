//without callback

// function first() {
//   setTimeout(() => {
//     console.log("first executed");
//   }, 0);
// }

// function second() {
//   setTimeout(() => {
//     console.log("hello");
//   }, 2000);
// }

// first();
// second();

//with callback
// It is a function which take function as an argument

//why call back functions?
//we need call back function to handle the asynchronous behaviour of javaScript.

function first(callback) {
  setTimeout(() => {
    console.log("first executed");
    callback();
  }, 6000);
}

function second() {
  setTimeout(() => {
    console.log("hello");
  }, 2000);
}

first(second);

//call back hell(nesting of callbacks)

// const animateAll = (animate) => {
//   setTimeout(() => {
//     animate();
//     setTimeout(() => {
//       animate();
//       setTimeout(() => {});
//     });
//   }, 2000);
// };

// call back inside a call back will lead to call back hell or pyramid of doom.
