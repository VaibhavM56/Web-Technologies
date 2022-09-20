let app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  watch: {
    counter(value) {
      console.log("value", value);
      if (value > 50) {
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      }
    },
  },
  computed: {
    fullname() {
      //   console.log("fullname computed executed");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Rastogi";
    },
    doubleCounter() {
      //   console.log("double counter is executed");
      return this.counter * 2;
    },
  },
  methods: {
    increment() {
      //   console.log("increment executed");
      this.counter += 5;
    },
    decrement() {
      this.counter = this.counter - 5;
    },
    // outputFullname() {
    //   console.log("output fullname executed");

    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + " " + "Rastogi";
    // },
  },
});
app.mount("#dataBinding");
