var express = require("express");
var app =express();
var mysql = require("mysql");
var bodyParser = require("body-parser");


app.use(bodyParser());

var con = mysql.createConnection({
	host : "localhost",
	user : "admin",
	password : "admin",
	database : "tss4"
});








app.use(express.static(__dirname+"/public"));


app.get("/", function(req, res){
	res.sendFile(__dirname+"/index.html");
});
app.get("/getdata", function(req, res){
	con.connect(function(err){
		var query = "SELECT * FROM cities LIMIT 20";
		con.query(query, function(err, result){
			result = JSON.parse(JSON.stringify(result));
			res.send(result);
		});
	});

});

app.post("/moredata", function(req, res){
	var a = req.body.skip;
	con.connect(function(err){
		var query = "SELECT * FROM cities LIMIT "+a+", 20";
		console.log(query);
		con.query(query, function(err, result){
			result = JSON.parse(JSON.stringify(result));
			res.send(result);
		});
	});
});




app.listen(3000, function(){
	console.log("Server Runnig");
});