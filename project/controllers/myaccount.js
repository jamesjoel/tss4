var express = require("express");
var routes = express.Router();
var user = require("../models/user");
var sha1 = require("sha1");

routes.get("/", function(req, res){
	var pagedata = { title : "My Account", pagename : "myaccount"};
	res.render("layout", pagedata);
});



module.exports=routes;