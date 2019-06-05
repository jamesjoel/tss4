var express = require("express");
var routes = express.Router();
var user = require("../models/user");
var sha1 = require("sha1");
var mongodb = require("mongodb");

routes.get("/", function(req, res){
	var id = req.session._id;
	var objid = mongodb.ObjectId(id);

	user.find({ _id : objid }, function(err, result){
		var pagedata = { title : "Profile", pagename : "profile", result : result[0]};
		res.render("layout", pagedata);
	});	
});



module.exports=routes;