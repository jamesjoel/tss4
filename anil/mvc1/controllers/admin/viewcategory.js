var express = require("express");
var routes =  express();
var category = require("../../models/category");
// var category = require("");

routes.get("/", function(req, res){
	category.find({}).toArray(function(err, result));
	var pagedata = { title : "View Category", pagename : "viewcategory", result : result};
	res.render("layout", pagedata);
});



module.exports=routes;