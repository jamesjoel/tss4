var express = require("express");
var app = express();


var MongoClient = require("mongodb").MongoClient;
var url ="mongodb://localhost:27017";

app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public/"));

app.get("/", function(req, res){
	MongoClient.connect(url, function(err, client){
		if(err){
			console.log("Connection Error", err);
			return;
		}
		var db = client.db("tss4");
		db.collection("student").find().toArray(function(err, result){
			if(err){
			console.log("Data Getting Error", err);
			return;
			}
			
			res.render("home", { result : result });
				
		});


	});
	



});



app.listen(3000, function(){
	console.log("Server Running on PORT ");
});