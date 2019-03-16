var express = require("express");
var routes = express.Router();
var sha1 = require("sha1");
var admin = require("../../models/admin");
// console.log(sha1("admin"));

routes.get("/", function(req, res){
	res.render("admin/login", { message : req.flash("msg")});
});

routes.post("/", function(req, res){
	var u = req.body.username;
	var p = req.body.password;
	admin.select({ username : u}, function(err, result){
		if(result.length==1)
		{
			if(result[0].password == sha1(p))
			{
				req.session.admin_id=result[0]._id;
				req.session.admin_name=result[0].name;
				req.session.is_admin_logged_in=true;
				res.redirect("/admin/dashboard");
			}
			else
			{
				req.flash("msg", "This password is incorrect");
				res.redirect("/admin");		
			}
		}
		else
		{
			req.flash("msg", "This username and password is incorrect");
			res.redirect("/admin");
		}
	});

});

module.exports=routes;