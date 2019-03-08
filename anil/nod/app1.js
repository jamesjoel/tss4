var express=require("express");
var app=express();

var bodyParser=require("body-parser");

app.use(express.static(__dirname + "/public/"));
app.set("view engine", "ejs");
app.use(bodyParser());

app.get("/",function(req,res){
	var pagedata={ title : "home page", pagedata : "home"}
	res.render("layout",pagedata);
});
app.get("/about",function(req,res){
	var pagedata={title : "about" , pagedata : "about"}
	res.render("layout",pagedata);
});
app.get("/contact",function(req,res){
	var pagedata={title : "contact" , pagedata : "contact"}
	res.render("layout",pagedata);
});


app.listen(3000,function(){
	console.log("Server running");
});