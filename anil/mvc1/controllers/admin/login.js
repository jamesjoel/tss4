var express = require("express");
var routes =  express.Router();

routes.get("/", function(req, res){
	var pagedata = { title : "Admin Login" , pagename : "login"};
	res.render("admin/layout" , pagedata);
});

module.exports=routes;