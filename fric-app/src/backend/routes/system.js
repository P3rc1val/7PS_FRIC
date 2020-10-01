//Lists
var List = require("collections/list");

//not sure if needed
var express = require("express");
var router = express.Router();

//Connect to MongoDB
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

//templete
router.post("/create", (req, res, next) => {
  MongoClient.connect(global.mongoURL, { useNewUrlParser: true }, function (
    err,
    client
  ) {
    if (err) {
      console.log("Unable to connect to MongoDB", err);
    } else {
      var data = req.body;
      console.log(data);
      //System Name
      var name = data.name;
      //System Description
      var description = data.description;
      //System Locations
      var locations = new List([data.locations]);
      //System Router
      var route = new List([data.route]);
      //System Switch
      var swit = new List([data.swit]);
      //System Room
      var room = new List([data.room]);
      //test plan
      var plan = data.plan;
      //Archive Status (Might change to a method that checks if event is in archive collection)
      var archStat = data.archStat;
      //CIA Scores
      var confidentiality = data.confidentiality;
      var integrity = data.integrity;
      var availability = data.availability;

      var json = {
        name: name,
        description: description,
        locations: locations,
        Router: route,
        Switch: swit,
        Room: room,
        TestPlan: plan,
        archive: archStat,
        Confidentiality: confidentiality,
        Integrity: integrity,
        Availability: availability,
      };
      console.log(json);
      var db = client.db("app");
      //reports or Test collections
      db.collection("Systems").insertOne(json, function (err, result) {
        if (err) throw err;
        console.log("1 document inserted");
        res.setHeader("Content-Type", "application/json");
        res.send(result["ops"]);
        res.end();
      });
      client.close();
    }
  });
});
module.exports = router;
