var express = require("express");
var routes = express.Router();


routes.get("/", function(req, res){
	res.send("<h1>This is About Page</h1>");
});
     

routes.get("/info", function(req, res){
	res.send("<h1>This is About / Info Page</h1>");
});

module.exports=routes;