const express = require("express");
const cors = require("cors");
require("./util/db");

// Port constants
const PORT = 5000;

// Express server
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    msg: "Hello world",
  });
});

app.listen(PORT, () => {
  console.log("Server is listening on port: 5000");
});
