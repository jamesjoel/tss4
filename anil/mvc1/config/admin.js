var express = require ("express");
var routes = express.Router();

routes.use("/admin",require("../../controllers/admin/addproduct"));
routes.use("/admin/viewcategory", require("../../controllers/admin/viewcategory"));
// routes.use("/");


module.exports=routes;