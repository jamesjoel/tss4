var express = require("express");
var routes = express.Router();


routes.get("/", function(req, res){
	res.render("home");
})

module.exports=routes;