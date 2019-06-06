var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var flash = require("express-flash");
var cache = require("nocache");
var upload = require("express-fileupload");



var routes = require("./config/routes");



app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public/"));
app.use(bodyParser());
app.use(cookieParser());
app.use(session({ secret : "james"}));
app.use(flash());
app.use(cache());
app.use(upload());




app.use(function(req, res, next){
	res.locals.logo="The Stepping Stone";
	res.locals.session = req.session;
	if(req.cookies.product_ids)
	{
		var str = req.cookies.product_ids;
		var arr = str.split("#");
		res.locals.total=arr.length;
	}
	else
	{
		res.locals.total=0;
	}



	next();
});



app.use(routes);





// app.get("/login", function(req, res){
// 	var pagedata = { title : "User Login", pagename : "login"};
// 	res.render("layout", pagedata);
// });

// app.get("/signup", function(req, res){
// 	var pagedata = { title : "Signup Page", pagename : "signup"};
// 	res.render("layout", pagedata);
// });




app.listen(3000, function(){
	console.log("Server Running At PORT : 3000");
});
