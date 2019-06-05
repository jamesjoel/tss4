var express = require("express");
var app = express();

 app.use(express.static(__dirname + "/public/"));


 app.get("/",function(req,res){
 	console.log("Home");
 	res.sendFile(__dirname + "/safaw.html")
 });

app.get("/S",function(req,res){
 	console.log("Signup page is runnig");
 	res.sendFile(__dirname + "/SafaWsignup.html")
 });




app.listen(3000,function(){
	console.log("Server Running at 3000 port");
});