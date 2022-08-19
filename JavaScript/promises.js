//promises : they are asynchronous and web Api's
//three states of promises
//1.pending  } --- default
//2.resolved
//3.rejected

console.log("start");

new Promise(function (resolve, reject) {
  if (10 > 4) {
    resolve("success");
  } else {
    reject("error");
  }
})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("ended");

const myPromis = new Promise(function (resol, rej) {
  setTimeout(() => {
    resol("successfully done");
  }, 4000);
});

myPromis
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.all([firstProm, myPromis])
  .then(() => {})
  .catch(() => {});
