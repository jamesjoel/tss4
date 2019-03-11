var express =require ("express");
var app = express();

var MongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017";

app.set("view engine","ejs");

app.use(express.static(__dirname + "/public/"));

app.get("/",function(req,res){
	MongoClient.connect(url,function(err, client){
		if (err){
			console.log("connection error",err);
			return;
		}

		var db= client.db("");
	}); 	
});