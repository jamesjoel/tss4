var express = require("express");
var app = express();


var routes = require("./config/routes");

var server = require("http").Server(app);
var io = require("socket.io")(server);

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(routes);

io.on("connection", function(socket){
	socket.on("message", function(data){
		console.log(data);

		socket.broadcast.emit("show", data);
	})
})





server.listen(3000, function(){
	console.log("Chat Live");
});


// app.get("/", function(req, res){
// 	res.render("home");
// })


// var server = reuire("http").Server();
// var io = reuire("socket.io")(server);
// io.on("connection", function("socket")
// 	socket.on("msg", function(data){

// 	})
