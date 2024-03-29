require('dotenv').config();
const express = require("express");
const cors = require('cors');
const compression = require('compression');
const path = require('path');
const mongoose = require("mongoose");

//const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(compression());
// Serve up static assets (usually on heroku)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + '/client/dist/client'));
  app.get('/*', function(request, response) {
    response.sendFile(path.join( __dirname + '/client/dist/client/index.html'));
  });
} else {
    const proxy = require('express-http-proxy')
    app.use('/', proxy('localhost:4200'))
}

// Add routes, both API and view
//app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/ecommerce-template"
  );

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});