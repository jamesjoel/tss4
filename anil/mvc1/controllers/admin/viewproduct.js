var express = require("express");
var routes = express.Router();
var product = require("../../models/product");
var category = require("../../models/category");
var mongodb = require("mongodb");

routes.get("/", function(req, res){
	product.find({}, function(err, result){
	var pagedata = { title : "All Product" , pagename : "viewproduct", result : result};
	res.render("admin/layout", pagedata);
	});
});

routes.get("/delete", function(req, res){
	console.log(id);
	var id = req.query.id;
	var _id = mongodb.ObjectId(id);
	product.remove({ _id : _id }, function(err, result){
		res.redirect("/admin/viewproduct");
	})
});

routes.get("/edit", function(req, res){
	category.find({}, function(err, result1){
	var id = req.query.id;
	var id = mongodb.ObjectId(id);
	product.find({ _id : id }, function(err, result2){

		var pagedata={ title : "Edit Product", pagename : "editproduct", category : result1, product : result2};
		res.render("admin/layout", pagedata);

	});
		
	});
});
module.exports=routes;