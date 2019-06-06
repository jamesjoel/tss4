var express = require("express");
var routes = express.Router();

var category = require("../models/category");
var product = require("../models/product");



routes.get("/", function(req, res){
	// console.log(req.cookies.product_ids);
	if(req.query.sorttype)
	{
		if(req.query.sorttype=="lowtoheight")
		{
			var sort = { price : 1};
		}
		if(req.query.sorttype=="heighttolow")
		{
			var sort = { price : -1};
		}
		if(req.query.sorttype=="atoz")
		{
			var sort = { name : 1};
		}
		if(req.query.sorttype=="ztoa")
		{
			var sort = { name : -1};
		}

		product.findbysort({}, sort, function(err, result1){
		category.find({},function(err, result2){

			var pagedata = { title : "Home Page", pagename : "home",product: result1, category : result2};
			res.render("layout", pagedata);
			});
		});	
	}
	else
	{
		product.find({}, function(err, result1){
		category.find({},function(err, result2){

			var pagedata = { title : "Home Page", pagename : "home",product: result1, category : result2};
			res.render("layout", pagedata);
			});
		});	
	}
	


	
});





module.exports=routes;