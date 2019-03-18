var express = require("express");
var routes = express.Router();

var category = require("../../models/category");


routes.get("/", function(req, res){

	category.find({}, function(err, result){

		var pagedata = { pagename : "viewcategory", category : result};
		res.render("admin/layout", pagedata);
	});

});

module.exports=routes;