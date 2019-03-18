var express = require ("express");
var routes = express.Router();



routes.get("/admin" , function(req,res){
	var pagedata = { title : Admin , pagename : "admin"};
	res.render("layout" , pagedata);
});

module.exports=routes;