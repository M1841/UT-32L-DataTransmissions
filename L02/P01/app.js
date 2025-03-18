const app = new Vue({
  el: "#app",
  data: {
    messageInput: "",
    messageOutput: "",
  },
  methods: {
    process: function () {
      this.messageOutput = `Message is ${
        this.messageInput !== "123" ? "not" : ""
      } equal to 123`;
    },
  },
});
