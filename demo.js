var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017";
MongoClient.connect(url, function(err, db) {
 if (err) throw err;
 var dbo = db.db("mydatabase");
 var myobj = { name: "Rehan Sayed", address: "Bengaluru" };
 dbo.collection("WT1").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
    });
});