var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var routes = require("./config/routes");

app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public/"));
app.use(bodyParser());



app.use(function(req, res, next){
	res.locals.logo="My Shop";
	console.log("++++++++++++hello++++++++++++");
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
