var express = require("express");
var routes = express.Router();


routes.get("/", function(req, res){
	res.send("<h1>This Page is not found</h1>");
});
     


module.exports=routes;