const express = require("express");
const bcrypt = require("bcrypt");
// Start the App
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

require("dotenv").config({ path:  __dirname + "/.env" });

// First Config App
app.use(express.static(__dirname + "/uploaded"));

// Require DB
require("./src/utils/db.js");

// Models
const Users = require("./src/models/user_schema");

// Config App & Cors
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Start Auth with JWS
const jwt = require("./src/utils/jwt");

// SendGrid Email Configuration
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Routes
app.use(require("./src/routes/api"));

// Opening the door
const port = 8080;
app.listen(port, () => {
  console.log("Server is running... on port " + port);
});