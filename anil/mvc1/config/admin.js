var express = require ("express");
var routes = express.Router();

routes.use("/admin",require("../../controllers/admin/addproduct"));
// routes.use("/");


module.exports=routes;