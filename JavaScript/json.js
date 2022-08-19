//JSON java script object notation

let person = {
  name: "vaibhav",
  ph: 7896554132,
  sal: 40000,
};

const jsonObj = JSON.stringify(person);
//it will convert javaScript object to json objects
console.log(jsonObj);

const javaScriptObj = JSON.parse(jsonObj);
console.log(javaScriptObj);
//JSON.parse() will convert json objects to java script objects
