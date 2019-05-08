var express = require("express");
var routes = express.Router();

routes.use("/", controllers("../controllers/home"));

module.exports=routes;