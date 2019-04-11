var express = require("express");
var app  =  express();
var routes = require("./config");

app.use("view engine", "ejs");
app.use(__dirname + "/public/");
app.use(routes);
 
app.listen(3000, function(req, res){
	console.log("server is running");
});
