var express = require("express");
var routes = express.Router();
var product = require("../../models/product");

routes.get("/", function(req,res){
	var pagedata = { title : "Add Product", pagename : "addproduct"};
	res.render("layout", pagedata);
});

routes.post("/", function(req, res){
	console.log(req.body);
	product.insert(req.body, function(err, result){
		res.redirect("/admin/addproduct");
	});
});


var routes=routes;
