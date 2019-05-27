var express = require("express");
var routes = express.Router();
var product = require("../../models/product");
var mongo = require("mongodb");

routes.get("/getPro", function(req, res){
	product.find({}, function(err, result){
		res.send(result);
		console.log(result);
	})
})
routes.post("/del", function(req, res){
	var _id = mongo.ObjectId(req.body._id);
	product.remove({ _id : _id}, function(err, result){
		res.send(result);
	})
})

module.exports=routes;