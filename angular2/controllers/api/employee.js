var express = require("express");
var routes = express.Router();
var employee = require("../../models/employee");



routes.get("/", function(req, res){
	employee.find({}, function(err, result){
		res.send(result);
	});
});
routes.post("/", function(req, res){
	console.log(req.body);
});	

module.exports=routes;