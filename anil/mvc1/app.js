var express = require("express");
var app = express();
var bodyParser = require("body-parser");		//data type conversion
var cookieParser = require("cookie-parser");
var session = require("express-session");
var flash = require("express-flash");
var cache = require("nocache");




var routes = require("./config/routes");

app.set("view engine", "ejs");

app.use(express.static(__dirname +"/public/"));
app.use(bodyParser());
app.use(cookieParser());
app.use(session({ secret : "anil"}));
app.use(cache());
app.use(flash());


app.use(function(req,res,next){
	res.locals.logo = "Zexome";
	res.locals.session = req.session;
	next();
});

app.use(routes);

// app.listen(3000,function(){
// 	console.log("Server Running");
// });
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Server Running at port ",port);
}); 










