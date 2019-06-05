var express=require("express");
var app=express();
var routes = require("./config/routes");
var bodyParser = require("body-parser");

app.use(express.static(__dirname+"/public/"));
app.set("view engine","ejs");
   
app.use(bodyParser());   
app.use(routes);


app.listen(3000,function(){
	console.log("server is runing");
});
