var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var upload = require("express-fileupload");

app.set("view engine", "ejs");

app.use(bodyParser());
app.use(upload());


app.get("/", function(req, res){
	res.render("index");
});

app.post("/", function(req, res){
	console.log(req.files.photo);

	var obj = req.files.photo;

	obj.mv(__dirname+"/demo/"+obj.name, function(err){

	});


});

app.listen(3000);
