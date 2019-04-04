var express = require("express");
var routes = express.Router();
var product = require("../../models/product");
var mongodb = require("mongodb");

routes.get("/", function(req, res){
	product.find({}, function(err, result){
	var pagedata = { title : "All Product" , pagename : "viewproduct", result : result};
	res.render("admin/layout", pagedata);
	});
});

routes.get("/delete", function(req, res){
	console.log(pid);
	var id = req.query.pid;
	var _id = mongodb.ObjectId(id);
	product.remove({ _id : _id }, function(err, result){
		res.redirect("/admin/viewproduct");
	})
});
module.exports=routes;