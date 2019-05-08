var express = require("express");
var routes = express.Router();
var products = require("../models/products");

routes.get("/", function(req, res){
	products.find({}, function(err, result){
	var pagedata = {title : "Our Products", pagename : "products", products : result}
	res.render("layout", pagedata);

	});
});

module.exports=routes;