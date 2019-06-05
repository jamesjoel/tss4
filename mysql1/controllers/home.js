var express = require("express");
var routes = express.Router();
var employee = require("../models/employee");


routes.get("/", function(req, res){
	employee.select(function(err, result){
		// console.log(JSON.parse(JSON.stringify(result)));
		result = JSON.parse(JSON.stringify(result));
		res.render("home", { result : result });

	});
});
routes.post("/", function(req, res){
	employee.insert(req.body, function(err, result){
		res.redirect('/');
	});
});
routes.get("/delete", function(req, res){
	employee.delete(req.query, function(err, result){
		res.redirect('/');
	});
});
routes.get("/edit", function(req, res){
	var a = req.query.eid;
	employee.select_by_id(a, function(err, result){
		result = JSON.parse(JSON.stringify(result));
		res.render("edit", { result : result[0] });
	});
});

routes.post("/edit", function(req, res){
	employee.update(req.body, function(err, result){
		res.redirect("/");
	});
});


module.exports = routes;