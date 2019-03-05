var express = require("express");
var app = express();
var bodyParser=require("body-parser")

app.set("view engine","ejs");

app.use(express.static(__dirname+"/public/"));
app.use(bodyParser());

app.get("/",function (req, res) {
	var pagedata= { title: "Home page"};
	res.render("home", pagedata);
});
app.get("/premium Graphic card",function (req, res) {
	var pagedata= { title: "premium Graphic card"};
	res.render("slider", pagedata);
});
app.get("*",function (req, res) {
	
	res.render("/nopage")

});




app.listen(3030,function () {
	console.log("Server Running");
});
