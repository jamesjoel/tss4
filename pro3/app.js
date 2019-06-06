var express = require("express");
var app = express();


app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public/"));


// app.set("views", "myname");


app.get("/", function(req, res){

	var color = [
		{
			name : "rohit",
			age : 25,
			city : "indore"
		},
		{
			name : "jaya",
			age : 25,
			city : "ujjain"
		},
		{
			name : "nidhi",
			age : 20,
			city : "indore"
		}
	];

	var obj = { first : "rohit", second : "anil", color : color};


	res.render("home", obj);
});


app.listen(3000, function(){
	console.log("Server Running");
});