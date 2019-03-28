var express = require("express");
var routes =  express.Router();
var admintable = require("../../models/admin");
var sha1 = require("sha1");
var flash = require("flash");

routes.get("/", function(req, res){
	var pagedata = { title : "Admin Login" , pagename : "login" , message : req.flash("msg")};
	res.render("admin/layout" , pagedata);
});

routes.post("/" , function(req, res){
	console.log(req.body);
	req.body.password = sha1(req.body.password);
	var u = req.body.username;
	var p = req.body.password;
	admintable.find({ username : "u"}, function(err, result))
			// if(err){
			// 	console.log("Finding error in login of admin");
			// }
		
	if(result.lenght==1){
		if(result[0].password==sha1(p)){
			req.session._id = result[0]._id;
			req.session.fullname = result[0].name;
			req.session.is_admin_logged_in =true;

		}else{

		res.flash("msg", "Password is Incorrect");
		res.redirect("/admin");
		}

	}else{
		res.flash("msg", "Username and Password are Incorrect");
		res.redirect("/admin");
	}

});


module.exports=routes;







