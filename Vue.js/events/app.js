let app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      console.log("increment executed");
      this.counter += 5;
    },
    decrement() {
      this.counter = this.counter - 5;
    },
    handleSubmit() {
      alert("form submitted successfully");
    },
  },
});
app.mount("#events");
