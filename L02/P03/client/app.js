const app = new Vue({
  el: "#app",
  data: {
    socket: io.connect("localhost:8081"),
    messages: [],
    message: "",
  },
  created: function () {
    this.socket.on("message-from-server", (message) => {
      this.messages.push(message);
    });
  },
  methods: {
    send: function () {
      this.messages.push(`You: ${this.message}`);
      this.socket.emit("message-from-client", this.message);
    },
  },
});
