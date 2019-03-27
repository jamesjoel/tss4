var express = require ("express");
var routes = express.Router();

routes.use("/",require("../controllers/admin/addproduct"));
routes.use("/addcategory", require("../controllers/admin/addcategory"))
routes.use("/viewcategory", require("../controllers/admin/viewcategory"));
// routes.u"se("/");


module.exports=routes;