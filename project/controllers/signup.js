var express = require("express");
var routes = express.Router();
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
var sha1 = require("sha1");


routes.get("/", function(req, res){
	var pagedata = { title : "Signup Page", pagename : "signup"};
	res.render("layout", pagedata);
});

routes.post("/", function(req, res){
	//console.log(req.body);

	req.body.password = sha1(req.body.password);

	MongoClient.connect(url, function(err, client){
		var db = client.db("tss4");
		db.collection("user").insert(req.body, function(err, result){
			console.log(result);
			res.redirect("/login");
		});

	});

});

module.exports=routes;