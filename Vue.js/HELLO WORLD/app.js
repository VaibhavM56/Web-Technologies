let app = Vue.createApp({
  data() {
    // similar to state in react
    //always return an object
    return {
      greeting: "Hello World",
      person: {
        name: "Ajay",
        age: 18,
      },
      learn: "<h1>Learn VUE</h1>",
      code: "Code VUE",
    };
  },
  //inside methods option, create all the methods
  methods: {
    randomOutput() {
      let randomNum = Math.random();
      console.log("random number", randomNum);
      if (randomNum < 0.5) {
        return this.learn;
      } else {
        return this.code; // all data and methods will be present inside app object so it can be accessed with this keyword
      }
    },
  },
});

app.mount("#first");
