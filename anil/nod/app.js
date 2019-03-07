var express=require("express");
var app=express();

var bodyParser=require("body-parser");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(bodyParser());


app.get("/",function(req,res){
	console.log("home page running");
	res.render();
})

app.listen(3000,function(){
	console.log("Server running");
});