var express = require("express");
var routes = express.Router();
var emp = require("../../models/emp");
var mongo = require("mongodb");


routes.get("/", function(req, res){
	emp.find({}, function(err, result){
		// console.log(result);
		res.send(result);
	});
})

routes.post("/", function(req, res){
	req.body.age = parseInt(req.body.age);
	req.body.salary = parseInt(req.body.salary);
	emp.insert(req.body, function(err, result){
		console.log(result);
		res.send(result);
	});
})

routes.post("/delete", function(req, res){
	emp.delete({ _id : mongo.ObjectId(req.body._id)}, function(err, result){
		res.send(result);
	});
});

module.exports=routes;