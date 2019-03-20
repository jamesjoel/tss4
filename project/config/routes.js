var express = require("express");
var routes = express.Router();

routes.use("/", require("../controllers/home"));
routes.use("/signup", require("../controllers/signup"));
routes.use("/login", require("../controllers/login"));

routes.use("/myaccount", backdoor, require("../controllers/myaccount"));
routes.use("/profile", backdoor, require("../controllers/profile"));



routes.use("/admin", require("./adminRoute"));



routes.get("/logout", function(req, res){
	req.session.destroy();
	res.redirect("/login");
});



function backdoor(req, res, next)
{
	if(! req.session.is_user_logged_in)
	{
		res.redirect("/login");
		return;
	}
	next();
}



module.exports=routes;