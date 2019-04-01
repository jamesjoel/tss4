var express = require("express");
var routes = express.Router();

var category = require("../models/category");
var product = require("../models/product");



routes.get("/", function(req, res){
	// console.log(req.cookies.product_ids);




	product.find({}, function(err, result1){
		category.find({},function(err, result2){

			var pagedata = { title : "Home Page", pagename : "home",product: result1, category : result2};
			res.render("layout", pagedata);
		});
	});
});

module.exports=routes;