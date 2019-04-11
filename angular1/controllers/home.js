var express = require("express");
var routes = express.Router();




routes.get("/", function(req, res){
	res.render("home");
});


routes.get("/show", function(req, res){
	res.send("hello world");
});


module.exports=routes;