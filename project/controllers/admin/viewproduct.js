var express = require("express");
var routes = express.Router();

var product = require("../../models/product");
var mongodb = require("mongodb");


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

module.exports=routes;