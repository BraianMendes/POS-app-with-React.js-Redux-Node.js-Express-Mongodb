const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require ("./utils/db.js");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", function(req, res, next) {
  return res.send("Hello Nodejs");
});

const port = 8080;
app.listen(port, () => {
  console.log("Server is running... on port " + port);
});