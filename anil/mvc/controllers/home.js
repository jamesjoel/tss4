var express = require ("express");
var routes = express.Router();
// var routes = require("../views/home");

routes.get("/",function(req,res){
	var pagedata = {title : "HOME", pagename : "home" }
	res.render("layout",pagedata)
});

module.exports=routes;