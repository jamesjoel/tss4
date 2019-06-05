var express = require("express");
var routes = express.Router();

routes.use("/", require("../controllers/home"));
routes.use("/products", require("../controllers/products"));
// routes.use("s")

module.exports=routes;