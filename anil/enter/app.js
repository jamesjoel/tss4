var express=require("express");
var app=express();

app.set("view engine" , "ejs");
app.use(express.static(__dirname + "/public/"));

app.get("/",function(req,res){
	
	var arr = [
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
		var obj={name : "Shittu", age : 19, city : "Gwalior", more : arr	};
		res.render("home", obj);
});

app.listen(3000,function(){
	console.log("Server running");
});