var express =reuqire("express");
var routes =express.Router();


routes.use("/",reuqire("../controllers/home"));
module.exports=routes;