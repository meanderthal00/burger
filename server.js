// requiring dependencies
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

// server set up
var port = process.env.PORT || 3000;

var app = express();

//pulling static content for the app from the public folder
app.use(express.static(".burger/public"));

//parsing the application
app.use(bodyParser.urlencoded({
  extended: true
}));

//parsing the JSON object
app.use(bodyParser.json());

//pulling in handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//importing routes and giving server access
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// setting listener
app.listen(port, function () {
  console.log("listening on port", port);
});