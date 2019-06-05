var express = require("express");
var app = express();

var routes = require("./config/routes");

app.use(routes);

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Server Running with PORT ", port);
});

// console.log(process.env.PORT);