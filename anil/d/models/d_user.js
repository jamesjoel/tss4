var connect = require("../config/connect");

module.exports.insert=function(where, cb){
	connect(function(err, client){

    var db = client.db("anil");
    db.collection("d_user").insert(where, cb); 
});

}