var express = require("express");
var app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get("/", function(req, res){
	var data=[
	{
		name : "Anil",
		age : 20,
		city:"dewas"
	},
	{
		name : "Rohit",
		age : 22,
		city:"Mumbai"
	},{
		name : "Dev",
		age : 26,
		city:"Indore"
	},{
		name : "Taha",
		age : 87,
		city:"Ujjain"
	}]
	res.send(data);
});

app.listen(3000, function(){
	console.log("Running");
});