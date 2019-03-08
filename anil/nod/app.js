var express=require("express");
<<<<<<< HEAD

var app=express();

app.use(express.static(__dirname + "/public/"));
app.set("view engine" , "ejs");

app.get("/",function(req,res){
	var arr=[
				{
					name : "Anil",
					age : 20,
					city : "dewas"
				},
				{
					name : "Rahul",
					age : 22,
					city : "Indore"
				},
				{
					name : "Sunil",
					age : 13,
					city : "bhopal"
				}
			];
		var obj={username : "anilsingh", pass : 12345, more : arr};
		res.render("home", obj);
});

app.listen(3000,function(){
	console.log("server running at port 3000");
=======
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
>>>>>>> 11e45c30a0175bdd4c9e5b0aa32974b72865ce72
});