var express = require("express");
var routes = express.Router();
var employee = require("../../models/employee");
var mongo = require("mongodb");


routes.get("/", function(req, res){
	employee.find({}, function(err, result){
		res.send(result);
	});
});


routes.post("/", function(req, res){
	req.body.age = parseInt(req.body.age);
	req.body.salary = parseInt(req.body.salary);
	employee.insert(req.body, function(err, result){
		console.log(result);
		res.send(result);
	});
});	


routes.post("/delete", function(req, res){
	employee.delete({ _id : mongo.ObjectId(req.body._id)}, function(err, result){
		res.send(result);
	});
});


module.exports=routes;