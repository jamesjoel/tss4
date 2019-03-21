var express = require("express");
var routes  = express.Router();
var connect = require("../models/user");

routes.get("/",function(req,res){
	var pagedata = { title : "Login" , pagename : "login" };
	res.render("layout",pagedata);
});

// routes.post();




module.exports=routes;