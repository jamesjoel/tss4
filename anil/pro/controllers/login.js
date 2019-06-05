var express = require("express");
var routes = express.Router();
var sha1 = require("sha1");
var users = require("../models/users");
var flash = require("express-flash");

routes.get("/", function(req, res){
	res.render("login");
});

routes.post("/", function(req, res){

	req.body.password=sha1(req.body.password);

	users.find(req.body, function(err, result){
	console.log(result);
		
		if(result.username == req.body.username){
		
			if(result[0].password == req.body.password){
				req.session._id = result[0]._id;
				req.session.name = result[0].username;
				req.session.is_user_logged_in = true;
				res.redirect("/");
			
			}else{
				// req.flash("msg", "Password is Incorrect");
				res.redirect("/login");
			}

		
		}else{
			// req.flash("msg", "This Username is Incorrect");
			res.redirect("/login");
		}

	});
});

module.exports=routes;