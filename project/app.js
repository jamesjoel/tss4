var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public/"));
app.use(bodyParser());


app.get("/", function(req, res){
	var pagedata = { title : "Home Page", pagename : "home"};
	res.render("layout", pagedata);
});


app.get("/login", function(req, res){
	var pagedata = { title : "User Login", pagename : "login"};
	res.render("layout", pagedata);
});

app.get("/signup", function(req, res){
	var pagedata = { title : "Signup Page", pagename : "signup"};
	res.render("layout", pagedata);
});




app.listen(3000, function(){
	console.log("Server Running At PORT : 3000");
});
