var express=reqiure("express");
var routes=express.routes();
var student=reqiure("../models/student");
routes.get("/",function (req,res){
	student.find(function(err,result){
		console.log(result);
	});
});
module.exports=routes;