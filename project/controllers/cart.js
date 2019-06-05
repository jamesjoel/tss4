var express = require("express");
var routes = express.Router();

var category = require("../models/category");
var product = require("../models/product");
var mongodb = require("mongodb");


routes.get("/addtocart", function(req, res){
	var id = req.query.id;
	
	var time = new Date(Date.now()+(1000*24*60*60));


	if(req.cookies.product_ids)
	{
		var x = req.cookies.product_ids;
		var newid = x+"#"+id;
		res.cookie("product_ids", newid, { expire : time, httpOnly : true});
		
	}
	else
	{
		res.cookie("product_ids", id, { expire : time, httpOnly : true});
	}
	
	res.redirect("/");
});

routes.get("/mycart", function(req, res){

	var str = req.cookies.product_ids;
	var arr = str.split("#");
	var id_arr=[];

	arr.forEach(function(x){
		var obj = { _id : mongodb.ObjectId(x)};
		id_arr.push(obj);
	});
	var where = {$or : id_arr};
	product.find(where, function(err, result){
		console.log(result);
		var pagedata = { title : "Cart Page", pagename : "cart", result : result};
		res.render("layout", pagedata);
	});


});
routes.get("/clear", function(req, res){
	res.clearCookie("product_ids");
	res.redirect("/");
});

module.exports=routes;