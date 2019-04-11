var express = require("express");
var router = express.Router();

routes.get("/", function(req, res){
	res.render("home");
});