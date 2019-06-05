var express = require("express");
var routes = express.Router();

var category = require("../../models/category");
var mongodb = require("mongodb");

routes.get("/", function(req, res){

	category.find({}, function(err, result){

		var pagedata = { pagename : "viewcategory", category : result};
		res.render("admin/layout", pagedata);
	});

});




routes.get("/delete", function(req, res){
	var id = req.query.id;
	category.remove({ _id : mongodb.ObjectId(id)}, function(err, result){
		res.redirect("/admin/viewcategory");
	});


});
module.exports=routes;