var express = require ("express");
var routes = express.Router();


routes.use("/", require("../controllers/admin/login"));
routes.use("/addcategory", require("../controllers/admin/addcategory"))
routes.use("/viewcategory", require("../controllers/admin/viewcategory"));
// routes.u"se("/");

routes.use("/logout", function(req, res){
	req.session.destroy();
	res.redirect("/admin");
});

module.exports=routes;