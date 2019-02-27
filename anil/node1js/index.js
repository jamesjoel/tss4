var express = require("express");

var index = express();

index.listen(3000,function(){
    console.log("Server Running");
});

 index.get("/about",function(req,res){
 	console.log("About page is running");
 	res.sendFile(__dirname + "/about.html");
 });
 index.get("/contact",function(rq,rs){
 	console.log("This is contact page");
 	rs.sendFile(__dirname + "/contact.html")
 });

 index.get("/",function(req,res){
 	console.log("This is home page");
 	res.sendFile(__dirname + "/index.js");
 });

 index.get("")