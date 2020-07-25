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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors Configuration
var allowedOrigins = ['http://localhost:3000',
                      process.env.PROJECT_URL];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return res.json({status:'error',msg});
    }
    return callback(null, true);
  }
}));

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