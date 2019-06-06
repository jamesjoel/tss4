var express = require("express");
var app = express();
var bodyParser=require("body-parser")

app.set("view engine","ejs");

app.use(express.static(__dirname+"/public/"));
app.use(bodyParser());

app.get("/",function (req, res) {
	var pagedata= { title: "Home page", pagename: "home"};
	res.render("layout", pagedata);
});
	
app.get("*",function (req, res) {
	var pagedata={title: "",pagename: "nopage"};
	res.render("layout");

});




app.listen(3030,function () {
	console.log("Server Running");
});
