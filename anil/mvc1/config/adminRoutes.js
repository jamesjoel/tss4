var express = require ("express");
var routes = express.Router();


routes.use("/", require("../controllers/admin/login"));
routes.use("/addcategory", backdoor, require("../controllers/admin/addcategory"))
routes.use("/viewcategory", backdoor, require("../controllers/admin/viewcategory"));
routes.use("/viewcategory/editcategory", backdoor, require("../controllers/admin/editcategory"));
routes.use("/addproduct", backdoor, require("../controllers/admin/addproduct"));

routes.get("/logout", function(req, res){
	req.session.destroy();
	res.redirect("/");
});

function backdoor(req, res, next){
	if(! req.session.is_admin_logged_in){
		res.redirect("/admin");
		return;
	}
	next()
}


module.exports=routes;