var express = require("express");
var routes = express.Router();

routes.get('/', function(req, res){
	var pagedata = { pagename : "dashboard"};
	res.render("admin/layout", pagedata);
});

module.exports=routes;