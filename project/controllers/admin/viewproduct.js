var express = require("express");
var routes = express.Router();

var product = require("../../models/product");
var mongodb = require("mongodb");
var category = require("../../models/category");


routes.get("/", function(req, res){
	product.find({}, function(err, result){

		var pagedata = { pagename : "viewproduct", product : result};
		res.render("admin/layout", pagedata);
	})
});

routes.get("/delete", function(req, res){
	var id = req.query.id;
	product.remove({ _id : mongodb.ObjectId(id)}, function(err, result){
		res.redirect("/admin/viewproduct");
	});
});


routes.get("/edit", function(req, res){
	var id = req.query.id;
	category.find({}, function(err, result1){

		product.find({ _id : mongodb.ObjectId(id)}, function(err, result){

			var pagedata = { pagename : "editproduct", product : result[0], category : result1};
			res.render("admin/layout", pagedata);	
		});
	});
});
routes.post("/edit", function(req, res){
	var id = req.body.pid;
	product.update({ _id : mongodb.ObjectId(id)}, req.body, function(err, result){
		res.redirect("/admin/viewproduct");
	});
});






module.exports=routes;