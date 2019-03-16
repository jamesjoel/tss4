var express = require("express");
var routes = express.Router();
var category = require("../../models/category");


routes.get('/', function(req, res){
	var pagedata = { pagename : "addcategory"};
	res.render("admin/layout", pagedata);
});


routes.post("/", function(req, res){
	category.insert(req.body, function(err, result){
		res.redirect("/admin/addcategory");
	});
});

module.exports=routes;