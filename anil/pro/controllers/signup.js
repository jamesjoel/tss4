var express= require("express");
var routes = express.Router();
var users = require("../models/users");
var sha1  = require('sha1');

routes.get("/", function(req, res){
	res.render("signup");
});

routes.post("/", function(req, res){
	req.body.password = sha1(req.body.password)
	console.log(req.body);
	users.insert(req.body, function(err, result){
		console.log(result);
		res.redirect("/");
	});
});

module.exports=routes;