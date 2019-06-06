var express = require("express");
var routes = express.Router();

routes.use("/", require("../controllers/home"));
routes.use("/api", require("../controllers/api/default"))

module.exports=routes;