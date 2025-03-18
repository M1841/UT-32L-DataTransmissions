const express = require("express");
const cors = require("cors");
let users = require("./users.json");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/users", (_, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const { name, city } = req.body;

  if (!!name && !!city) {
    users.push({ name, city });
  }

  res.json(users);
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, city } = req.body;

  const user = users[id];

  if (!!name) {
    user.name = name;
  }
  if (!!city) {
    user.city = city;
  }

  res.json(users);
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  users[id] = undefined;
  users = users.filter((u) => !!u);
  res.json(users);
});

app.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});
