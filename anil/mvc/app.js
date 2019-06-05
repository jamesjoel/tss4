var express = require ("express");
var app = express();
var bodyParser=require("body-parser");

app.set("view engine","ejs");
app.use(express.static(__dirname + "/public/"));

var routes= require("./config/routes"); 
app.use(bodyParser());
app.use(routes);

app.listen(3000,function(){
	console.log("Server Running at 3000 port");
});