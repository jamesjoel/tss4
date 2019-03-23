var express = require("express");
var routes = express.Router();
var user = require("../models/user");
var sha1 = require("sha1");

routes.get("/", function(req, res){
	var pagedata = { title : "Login Page", pagename : "login", message : req.flash("msg")};
	res.render("layout", pagedata);
});

routes.post("/", function(req, res){
	var u = req.body.username;
	var p = req.body.password;

	user.find({ username : u}, function(err, result){
		console.log(result);
		if(result.length==1)
		{
			if(result[0].password==sha1(p))
			{
				req.session._id = result[0]._id;
				req.session.full_name = result[0].full_name;
				req.session.is_user_logged_in = true;
				res.redirect("/myaccount");

			}
			else
			{
				req.flash("msg", "This Password is Incorrect");
				res.redirect("/login");		
			}
		}
		else
		{
			req.flash("msg", "This Username And Password is Incorrect");
			res.redirect("/login");
		}
	})

});

module.exports=routes;