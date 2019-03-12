var express = require("express");
var routes = express.Router();
var user = require("../models/user");




routes.get("/", function(req, res){

	user(function(err, result){
		res.render("home", { result : result })
	});



});

module.exports=routes;