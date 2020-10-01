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
      //Task Title
      var title = data.title;
      //Task Description
      var description = data.description;
      //Task Progress
      var progress = data.progress;
      //Task Due Date
      var dueDate = new Date(Date.now() - 60000 * 60 * 6)
        .toISOString()
        .replace(/T/, " ")
        .replace(/\..+/, "");
      //Attachments ****needs to be fixed****
      var attach = data.attach;
      //Asociations to Task
      var asociation = new List([data.asociation]);
      //Analyst Assignment
      var analyst = new List([data.analyst]);
      //Collaborator Assignment
      var collab = new List([data.collab]);
      //Archive Status (Might change to a method that checks if event is in archive collection)
      var archStat = data.archStat;

      var json = {
        title: title,
        description: description,
        progress: progress,
        dueDate: dueDate,
        attachment: attach,
        asociation: asociation,
        analyst: analyst,
        collab: collab,
        archStat: archStat,
      };
      console.log(json);
      var db = client.db("app");
      //reports or Test collections
      db.collection("Tasks").insertOne(json, function (err, result) {
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
