var express = require("express");
var routes = express.Router();
var student = require("../models/student");

routes.get("/", function(req, res){
	student.find(function(err, result){
		console.log(result);
	});
});

module.exports=routes;

