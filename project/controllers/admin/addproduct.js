var express = require("express");
var routes = express.Router();
var category = require("../../models/category");
var product = require("../../models/product");
var random = require("randomstring");
var path = require("path");



routes.get('/', function(req, res){
	category.find({}, function(err, result){
		var pagedata = { pagename : "addproduct", category : result, message : req.flash("msg")};
		res.render("admin/layout", pagedata);
		
	});


});
routes.post("/", function(req, res){
	var fileObj = req.files.image;

	var name = fileObj.name;
	var size = fileObj.size;

	var arr = name.split(".");
	var ext = arr[arr.length-1];

	if(ext == "jpeg" || ext == "jpg" || ext == "gif" || ext == "png")
	{
		if(size <= 1024*1024)
		{
			var rand = random.generate(25);
			var new_name = rand+"."+ext;
			// path.resolve()
			fileObj.mv(path.resolve()+"/public/product/"+new_name, function(err){

				req.body.image = new_name;
				req.body.price = parseInt(req.body.price);

				product.insert(req.body, function(err, result){
					res.redirect("/admin/addproduct");
				});
			});
		}
		else
		{
			req.flash("msg", "The File Size in Too Large");
			res.redirect("/admin/addproduct");		
		}
	}
	else
	{
		req.flash("msg", "This File Type Not Allowed");
		res.redirect("/admin/addproduct");
	}


	
});



module.exports=routes;