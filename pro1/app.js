// Require the express module (pkg)
var express = require("express");
// Calling a express contructor
var app = express();
// Creating Specific URL and Send Specific File
app.get("/about", function(req, res){
	console.log("This is about page calling");
	res.sendFile(__dirname+"/about.html");
});

app.get("/contact", function(req, res){
	console.log("This is contact page calling");
	res.sendFile(__dirname+"/contact.html");
});
app.get("/", function(req, res){
	console.log("This is home page calling");
	res.sendFile(__dirname+"/home.html");
});



app.get("/user/setting", function(req, res){
	res.sendFile(__dirname+"/setting.html");
});


app.get("/demo", function(req, res){
	res.send("hello world");
});

app.get("*", function(req, res){
	res.sendFile(__dirname+"/not_found.html");
});




// Creating a Virtual Server with 3000 Port
app.listen(3000, function(){
	console.log(__dirname);

	console.log("Server Running");
});


