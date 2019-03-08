var express=require("express");

var app=express();

app.use(express.static(__dirname + "/public/"));
app.set("view engine" , "ejs");

app.get("/",function(req,res){
	var arr=[
				{
					name : "Anil",
					age : 20,
					city : "dewas"
				},
				{
					name : "Rahul",
					age : 22,
					city : "Indore"
				},
				{
					name : "Sunil",
					age : 13,
					city : "bhopal"
				}
			];
		var obj={username : "anilsingh", pass : 12345, more : arr};
		res.render("home", obj);
});

app.listen(3000,function(){
	console.log("server running at port 3000");
});