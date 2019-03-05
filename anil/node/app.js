var express = require("express");
var app = express();

app.listen(3000,function(){
	console.log("Server Running at 3000 port");
});
 
 app.get("/"function(req,res){
 	console.log("Home page");
 });