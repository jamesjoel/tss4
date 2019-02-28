var express = require("express");
var app = express();

app.use(express.static(__dirname+"/public"));

app.get("/",function (req, res) {
	console.log("About Running");
	res.sendFile(__dirname+"/home.html");
});
app.get("*",function (req, res) {
	console.log("nopage");
	res.sendFile(__dirname+"/nopage.html")

})




app.listen(3000,function () {
	console.log("Server Running");
});
