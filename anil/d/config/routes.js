var express = require("express");
var routes = express.Router();

routes.use("/", function(req, res){
	var pagedata = { title : "HOME", pagename : "home"}
	res.render("title", pagename);
});