var express=require ("express");
var safaw= express();

  safaw.listen(3000,function(){
  	console.log("Server Running");
  });

  safaw.get("/",function(req,res){
  	console.log("This is home page running");
  	res.sendFile(__dirname + "/SafaW.html");
  });
  
  safaw.get("/SignUp",function(req,res){
  	console.log("This is Contact page");
  	res.sendFile(__dirname +"/SafaWsignup.html");
  });

  safaw.get("/Login",function(req,res){
  	console.log("This is About page");
  	res.sendFile(__dirname + "/about.html")
  });

  // safaw.get("*",function(rq,rs){
  // 	console.log("Not found");
  // 	rs.sendFile(__dirname +"/not.html")
  // });