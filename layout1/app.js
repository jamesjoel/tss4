var express = require("express");
var app = express();

var bodyParser = require("body-parser");



app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public/"));


app.use(bodyParser());

// app.use(bodyParser({ urlencoded : true}));



// app.use(bodyParser.urlencoded({
//   extended: true
// }));



app.get("/", function(req, res){
	var pagedata = { title : "Home Page", pagename : "home"};
	res.render("layout", pagedata);
});

app.get("/about", function(req, res){
	var pagedata = { title : "About Page", pagename : "about"};
	res.render("layout", pagedata);
});

app.get("/contact", function(req, res){
	var pagedata = { title : "Contact Page", pagename : "contact"};
	res.render("layout", pagedata);
});

app.get("/help", function(req, res){
	var pagedata = { title : "Help Page", pagename : "help"};
	res.render("layout", pagedata);
});




app.post("/save", function(req, res){
	console.log(req.body);
});




app.listen(3000, function(){
	console.log("Server Running");
});