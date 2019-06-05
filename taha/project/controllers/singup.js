var express=require("express");
var routes=express.Routes();
var sha1=require("sha1");
var user=require("../models/user");


routes.get("/",function(req,res){
	var pagedata={title : "Singup Page", pagename: "singup"};
	res.render("layout");
});

routes.post("/",function(req,res){
	req.body.password=sha1(req.body.password);
	user.insert(req.body,function(err,result){
		res.redirect("/login");
	});
});
module.exports=routes;