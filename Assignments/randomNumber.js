//WAP to print a random number between 1 and 50

// let randomNumber = () => {
//   let arr = [];
//   for (let i = 1; i < 51; i++) {
//     arr.push(i);
//   }

//   let randomIndex = Math.floor(Math.random() * arr.length);
//   console.log(randomIndex);
//   console.log(arr[randomIndex]);
// };

// randomNumber();

//WAP for prime number
// let primeNumber = (num) => {
//   let s = 0;
//   for (let i = 1; i < num / 2; i++) {
//     if (num % i === 0) {
//       s = s + 1;
//     }
//   }
//   if (s === 1) {
//     console.log("prime");
//   } else {
//     console.log("not prime");
//   }
// };

// primeNumber(9);

//WAP for bubblesort
let swap = (a, b) => {
  let t = a;
  a = b;
  b = t;
};
let bubblesort = () => {
  let arr = [9, 20, 62, 2, 0, 98, 21];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr[j], arr[j + 1]);
      }
    }
  }
  console.log(arr);
};

bubblesort();
