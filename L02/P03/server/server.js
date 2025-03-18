const io = require("socket.io");
const server = io.listen(8081);

const clients = new Map();

server.on("connection", (socket) => {
  console.info(`Client connected [id=${socket.id}]`);
  clients.set(socket);

  socket.on("disconnect", () => {
    clients.delete(socket);
    console.info(`Client disconnected [id=${socket.id}]`);
  });

  socket.on("message-from-client", (payload) => {
    sendToAll(socket, payload);
  });
});

function sendToAll(sender, message) {
  for (const [client, _] of clients.entries()) {
    if (sender.id != client.id) {
      client.emit(
        "message-from-server",
        `${sender.id.slice(4, 8)}: ${message}`
      );
    }
  }
}
