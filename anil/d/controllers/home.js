var express = require("express");
var routes = express.Router();

routes.get("/",  function(req, res){
	var pagedata = { title : "HOME", pagename : "home"}
	res.render("title", pagename);
});


md