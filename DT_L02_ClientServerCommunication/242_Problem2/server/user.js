const users = require("./users.json");
const express = require("express");
const router = express.Router();

router.route("/").get((_, res) => {
  res.json(users);
});

exports.routes = router;
