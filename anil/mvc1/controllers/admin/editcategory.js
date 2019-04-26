var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var category = require("../../models/category");

routes.get("/", function(req, res){
	category.find({}, function(err, result){
		console.log(result);
	var pagedata = { title : "Edit Category", pagename : "editcategory", result : result}
	res.render("admin/layout", pagedata);
		
	});
});

routes.post("/", function(req, res){
	var id = req.query.id;

	console.log(id);
	console.log(req.query);
	var _id = mongodb.ObjectId(id);
	category.edit({ _id : _id}, req.query, function(err, result){
		console.log(result);
		res.redirect("/admin/viewcategory");
	})
});

module.exports=routes;