var express = require("express");
var routes = express.Router();
var product = require("../../models/product");
var category = require("../../models/category");

routes.get("/", function(req,res){
	category.find({}, function(err, result){

	var pagedata = { title : "Add Product", pagename : "addproduct", result : result};
	res.render("admin/layout", pagedata);
	});
});

routes.post("/", function(req, res){
	console.log(req.body);
	product.insert(req.body, function(err, result){
		res.redirect("/admin/addproduct");
	});
});


module.exports=routes;
