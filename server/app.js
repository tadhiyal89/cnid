var express = require("express");
require('dotenv').config();
var cors = require('cors');
var routes = require("./routes/routes.js");
var app = express();

app.use(cors()) // Use this after the variable declaration
var port = process.env.PORT || 4000
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//adding app in the routes
routes(app);

var server = app.listen(port, function () {
    console.log("app running on port.", server.address().port);
});