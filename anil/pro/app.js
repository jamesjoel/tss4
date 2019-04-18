var express = require("express");
var app = express();
var routes = require("./config/routes");
var bodyParser = require("body-parser");
var session = require("express-session");

app.use(express.static(__dirname+"/public/"));
app.set("view engine", "ejs");
app.use(bodyParser());
app.use(session({secret : "anil"}));
app.use(routes);

app.listen(3000, function(){
	console.log("Server running at 3000 Port");
});