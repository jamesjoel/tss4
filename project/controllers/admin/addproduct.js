var express = require("express");
var routes = express.Router();
var category = require("../../models/category");
var product = require("../../models/product");


routes.get('/', function(req, res){
	category.find({}, function(err, result){
		var pagedata = { pagename : "addproduct", category : result};
		res.render("admin/layout", pagedata);
		
	});


});
routes.post("/", function(req, res){
	product.insert(req.body, function(err, result){
		res.redirect("/admin/addproduct");
	});
});



module.exports=routes;