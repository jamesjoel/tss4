var express = require("express");
var routes = express.Router();


routes.use("/", require("../controllers/home"));
routes.use("/show", require("../controllers/show"));

module.exports=routes;