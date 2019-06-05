var express = require("express");
var app = express();


var cookieParser = require("cookie-parser");
var session = require("express-session");


app.use(cookieParser());
app.use(session({ secret : "james"}));

var n = 0;
var counter = 0;

app.get("/", function(req, res){
	n++;
	if(! req.session.check)
	{
		req.session.check=true;
		counter++;
	}
	res.send("<h1>"+counter+"</h1><h2>"+n+"</h2>");
});


app.listen(3000);