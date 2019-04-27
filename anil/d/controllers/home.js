var express = require("express");
var routes = express.Router();
var d_user = require("../models/d_user");

routes.get("/",  function(req, res){
	// var pagedata = { title : "HOME", pagename : "home"}
	// res.render("title", pagename);
	res.render("layout");
});


routes.post("/", function(req, res){
	console.log(req.body);
	d_user.insert(req.body, function(err, result){
		res.redirect("/#myModal");
	});
})

module.exports=routes;