var express = require("express");
var app = express();


var routes = require("./config/routes");

app.set("view engine", "ejs");

app.use(express.static(__dirname +"/public/"));
app.use(routes);


// app.listen(3000,function(){
// 	console.log("Server Running");
// });
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Server Running at port ",port);
}); 










