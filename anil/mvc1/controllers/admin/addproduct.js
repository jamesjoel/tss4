var express = require("express");
var routes = express.Router();
var product = require("../../models/product");
var category = require("../../models/category");
var upload = require("express-fileupload");
var random = require("randomstring");
var flash = require("flash");

routes.get("/", function(req,res){
	category.find({}, function(err, result){

	var pagedata = { title : "Add Product", pagename : "addproduct", result : result, message : req.flash("msg")};
	res.render("admin/layout", pagedata);
	});
});



routes.post("/", function(req, res){
	console.log(req.body);
	console.log(req.files);
	var image = req.files.image;
	var name = req.files.name;
	var size = req.files.size;

	var arr = name.split(".");
	var n = arr.length;
	var ext = arr[n-1];


	if (ext == "jpg" || ext == "jpeg" || ext == "png" || ext == "gif" || ext == "bmp"){
		if(size <= 1024*1024){
			var rand_string = random.generate(21);

			var newname = rand_string + "." + ext;
			image.mv(__dirname + "/file/" + newname, function(err){
				if(err){
					console.log("...Error.. in uploading file")
				}else{
					console.log("File uploaded successfully...")
				}
				res.render("/admin/addproduct");
			});
		}else{
			req.flash("msg", "File size is too long...")
		}
	}else{
		req.flash("msg", "This type of file is not supported try jpg, jpeg, png, gif..")
	}

	product.insert(req.body, function(err, result){
		res.redirect("/admin/addproduct");
	});
});



module.exports=routes;
