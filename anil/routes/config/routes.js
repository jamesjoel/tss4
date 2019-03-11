var express = require ("express");
var routes = express.Router();

routes.use("/", require("../controllers/home"));
routes.use("/login",require("../controllers/login"));
routes.use("/signup", require("../controllers/signup"));

routes.use("*",require("../controllers/notfound"));

module.exports=routes;