var express = require("express");
var routes = express.Router();

routes.get("/", function(req,res){
	var pagedata = { title : "Add Product", pagename : "addproduct"};
	res.render("layout", pagedata);
});
var routes=routes;
