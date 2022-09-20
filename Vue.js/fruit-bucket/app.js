let app = Vue.createApp({
  data() {
    return {
      newFruitValue: "",
      fruits: ["apple", "mango", "lichi"],
    };
  },
  methods: {
    addFruit() {
      //   console.log("fruit entered ", this.newFruitValue);
      this.fruits.push(this.newFruitValue);
      //reset input field
      this.newFruitValue = "";
    },
    deleteFruit(index) {
      //   console.log("selected fruit");
      this.fruits.splice(index, 1);
    },
  },
});

app.mount("#fruitBucket");
