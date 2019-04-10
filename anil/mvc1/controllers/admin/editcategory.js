var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var category = require("../../models/category");

routes.get("/", function(req, res){
	category.find({}, function(err, result){
	var pagedata = { title : "Edit Category", pagename : "editcategory", result : result}
	res.render("admin/layout", pagedata);
		
	});
});

routes.post("/", function(req, res){
	var id = req.query.eid;
	var _id = mongodb.ObjectId(id);
	category.edit({ _id : _id}, req.body, function(err, result){
		res.redirect("/admin/viewcategory");
	})
});

module.exports=routes;