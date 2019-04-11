var express = require("express");
var routes = express.Router();

routes.use("/employee", require("./employee"))

module.exports=routes;