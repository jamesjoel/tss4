var express=require("express");
var app=express();
var routes = require("./config/routes");


app.use(express.static(__dirname+"/public/"));
app.set("view engine","ejs");
   
app.use(routes);


app.listen(3000,function(){
	console.log("server is runing");
});
