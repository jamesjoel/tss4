var express = require("express");
var routes = express.Router();

routes.use("/emp", require("./emp"));

module.exports=routes;
