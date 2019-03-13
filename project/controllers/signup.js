var express = require("express");
var routes = express.Router();
var sha1 = require("sha1");
var user = require("../models/user");


routes.get("/", function(req, res){
	var pagedata = { title : "Signup Page", pagename : "signup"};
	res.render("layout", pagedata);
});

routes.post("/", function(req, res){

	req.body.password = sha1(req.body.password);


	user.insert(req.body, function(err, result){
		res.redirect("/login");
	});

	// req.body.password = sha1(req.body.password);

	// MongoClient.connect(url, function(err, client){
	// 	var db = client.db("tss4");
	// 	db.collection("user").insert(req.body, function(err, result){
	// 		console.log(result);
	// 		res.redirect("/login");
	// 	});

	// });



});

module.exports=routes;