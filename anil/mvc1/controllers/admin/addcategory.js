var express = require("express");
var routes = express.Router();
var category = require("../../models/category");


routes.get("/", function(req, res){
	var pagedata= { title : "Add Category", pagename : "addcategory"};
	res.render("admin/layout", pagedata);
});

routes.post("/", function(req, res ){
	console.log(req.body);
	category.insert(req.body, function (err, result){
		res.redirect("/admin/addcategory");
	});
});

module.exports=routes;