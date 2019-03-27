var express = require("express");
var routes = express.Router();


routes.use("/", require("../controllers/home"));

routes.use ("/shop", require("../controllers/shop"));

routes.use("/signup",require("../controllers/sign"));

routes.use("/login" , require("../controllers/login"));

// routes.use("/myaccount", require("../controllers/myaccount"));

// routes.use("/Features",require("../controllers/features"));

// routes.use("/About",require("../controllers/about"));

routes.use("/contact", require("../controllers/contact"));


// routes.use("/Blog",require("../controllers/blog"));

routes.use("/admin", require("../controllers"));

routes.get("/logout",function(req, res){
	req.session.destroy();
	res.redirect("/login");
});
 
 function backdoor(req, res, next)
 {
 	if(! req.session.is_user_logged_in){
		res.redirect("/login");
		return;
	}
 }

module.exports=routes;