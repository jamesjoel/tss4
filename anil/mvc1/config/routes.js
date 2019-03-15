var express = require("express");
var routes = express.Router();


routes.use("/", require("../controllers/home"));

routes.use ("/shop", require("../controllers/shop"));

routes.use("/SignUp",require("../controllers/sign"));



module.exports=routes;