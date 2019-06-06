var express = require ("express");
var app = express();


app.set("view engine" , "ejs");
app.use(express.static(__dirname + "/public/"));

app.listen(3000,function(req,res){
	console.log("Server runnning at 3000");
});