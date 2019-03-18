var express = require("express");
var routes = express.Router();

var product = require("../../models/product");

routes.get("/", function(req, res){
	product.find({}, function(err, result){

		var pagedata = { pagename : "viewproduct", product : result};
		res.render("admin/layout", pagedata);
	})
});

module.exports=routes;