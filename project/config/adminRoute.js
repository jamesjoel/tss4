var express = require("express");
var routes = express.Router();


routes.use("/", require("../controllers/admin/login"));

routes.use("/dashboard", backdoor, require("../controllers/admin/dashboard"));
routes.use("/addcategory", backdoor, require("../controllers/admin/addcategory"));


routes.get("/logout", function(req, res){
	req.session.destroy();
	res.redirect("/");
});

function backdoor(req, res, next)
{
	if(! req.session.is_admin_logged_in){
		res.redirect("/admin");
		return;
	}
	next();
}

module.exports=routes;