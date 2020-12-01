const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 8080;
const app = express();

const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";
const dbName = "fric_sw";
let db = null;

app.use(cors());
app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

MongoClient.connect(url, { useUnifiedTopology: true })
  .then((client) => {
    console.log("Connected to Database");
    db = client.db(dbName);
  })
  .catch((error) => {
    console.error(error.message);
  });

//Events methods to post and get
app.post("/createEvent", function (req, res) {
  db.collection("Events").insertOne(req.body, (err) => {
    if (err) throw err;
    console.log("1 Event inserted");
  });
  res.json({ message: "Success" });
});

app.get('/retrieveEvent', (req, res) => {
  db.collection('Events').find({}).toArray(function(err, result) {
      if (err) console.error(err);
      res.send(result);
  });
});

//Analyst methods to post and get
app.post("/createAnalyst", function (req, res) {
  db.collection("Analysts").insertOne(req.body, (err) => {
    if (err) throw err;
    console.log("1 Analyst inserted");
  });
  res.json({ message: "Success" });
});

app.get('/retrieveAnalyst', (req, res) => {
  db.collection('Analysts').find({}).toArray(function(err, result) {
      if (err) console.error(err);
      res.send(result);
  });
});

//System methods to get and post
app.post("/createSystem", function (req, res) {
  db.collection("Systems").insertOne(req.body, (err) => {
    if (err) throw err;
    console.log("1 System inserted");
  });
  res.json({ message: "Success" });
});

app.get('/retrieveSystem', (req, res) => {
  db.collection('Systems').find({}).toArray(function(err, result) {
      if (err) console.error(err);
      res.send(result);
  });
});

//Tasks methods to get and post
app.post("/createTask", function (req, res) {
  db.collection("Tasks").insertOne(req.body, (err) => {
    if (err) throw err;
    console.log("1 Task inserted");
  });
  res.json({ message: "Success" });
});

app.get('/retrieveTask', (req, res) => {
  db.collection('Tasks').find({}).toArray(function(err, result) {
      if (err) console.error(err);
      res.send(result);
  });
});

//Subtaks methods for post and get
app.post("/createSubtask", function (req, res) {
  db.collection("Subtasks").insertOne(req.body, (err) => {
    if (err) throw err;
    console.log("1 Subtask inserted");
  });
  res.json({ message: "Success" });
});

app.get('/retrieveSubtask', (req, res) => {
  db.collection('Subtasks').find({}).toArray(function(err, result) {
      if (err) console.error(err);
      res.send(result);
  });
});

//Finding methods for post and get
app.post("/createFinding", function (req, res) {
  db.collection("Findings").insertOne(req.body, (err) => {
    if (err) throw err;
    console.log("1 Finding inserted");
  });
  res.json({ message: "Success" });
});

app.get('/retrieveFinding', (req, res) => {
  db.collection('Findingss').find({}).toArray(function(err, result) {
      if (err) console.error(err);
      res.send(result);
  });
});

//Post method for creating a log
app.post("/createLog", function (req, res) {
  db.collection("Logs").insertOne(req.body, (err) => {
    if (err) throw err;
    console.log("1 Log");
  });
  res.json({ message: "Success" });
});

//CounterMeasure methods to get and post
app.post("/createCounterMeasure", function (req, res) {
  db.collection("CounterMeasure").insertOne(req.body, (err) => {
    if (err) throw err;
    console.log("1 Counter Measure inserted");
  });
  res.json({ message: "Success" });
});

app.get('/retrieveCounterMeasure', (req, res) => {
  db.collection('CounterMeasure').find({}).toArray(function(err, result) {
      if (err) console.error(err);
      res.send(result);
  });
});

//EventClass methods to get and post
app.post("/createEventClass", function (req, res) {
  db.collection("EventClass").insertOne(req.body, (err) => {
    if (err) throw err;
    console.log("1 Event Class inserted");
  });
  res.json({ message: "Success" });
});

app.get('/retrieveEventClass', (req, res) => {
  db.collection('EventClass').find({}).toArray(function(err, result) {
      if (err) console.error(err);
      res.send(result);
  });
});

//EventRules methods to get and post
app.post("/createEventRules", function (req, res) {
  db.collection("EventRules").insertOne(req.body, (err) => {
    if (err) throw err;
    console.log("1 Event Rules inserted");
  });
  res.json({ message: "Success" });
});

app.get('/retrieveEventRules', (req, res) => {
  db.collection('EventRules').find({}).toArray(function(err, result) {
      if (err) console.error(err);
      res.send(result);
  });
});

//EventType methods to get and post
app.post("/createEventType", function (req, res) {
  db.collection("EventType").insertOne(req.body, (err) => {
    if (err) throw err;
    console.log("1 Event Type inserted");
  });
  res.json({ message: "Success" });
});

app.get('/retrieveEventType', (req, res) => {
  db.collection('EventType').find({}).toArray(function(err, result) {
      if (err) console.error(err);
      res.send(result);
  });
});

//FindingClass methods to get and post
app.post("/createFindingClass", function (req, res) {
  db.collection("FindingClass").insertOne(req.body, (err) => {
    if (err) throw err;
    console.log("1 Finding Class inserted");
  });
  res.json({ message: "Success" });
});

app.get('/retrieveFindingClass', (req, res) => {
  db.collection('FindingClass').find({}).toArray(function(err, result) {
      if (err) console.error(err);
      res.send(result);
  });
});

//FindingImpactLevel methods to get and post
app.post("/createFindingImpactLevel", function (req, res) {
  db.collection("FindingImpactLevel").insertOne(req.body, (err) => {
    if (err) throw err;
    console.log("1 Finding Impact Level inserted");
  });
  res.json({ message: "Success" });
});

app.get('/retrieveFindingImpactLevel', (req, res) => {
  db.collection('FindingImpactLevel').find({}).toArray(function(err, result) {
      if (err) console.error(err);
      res.send(result);
  });
});

//FindingType methods to get and post
app.post("/createFindingType", function (req, res) {
  db.collection("FindingType").insertOne(req.body, (err) => {
    if (err) throw err;
    console.log("1 Finding Type inserted");
  });
  res.json({ message: "Success" });
});

app.get('/retrieveFindingType', (req, res) => {
  db.collection('FindingType').find({}).toArray(function(err, result) {
      if (err) console.error(err);
      res.send(result);
  });
});

//Impact methods to get and post
app.post("/createImpact", function (req, res) {
  db.collection("Impact").insertOne(req.body, (err) => {
    if (err) throw err;
    console.log("1 Impact inserted");
  });
  res.json({ message: "Success" });
});

app.get('/retrieveImpact', (req, res) => {
  db.collection('Impact').find({}).toArray(function(err, result) {
      if (err) console.error(err);
      res.send(result);
  });
});

//Level methods to get and post
app.post("/createLevel", function (req, res) {
  db.collection("Level").insertOne(req.body, (err) => {
    if (err) throw err;
    console.log("1 Level inserted");
  });
  res.json({ message: "Success" });
});

app.get('/retrieveLevel', (req, res) => {
  db.collection('Level').find({}).toArray(function(err, result) {
      if (err) console.error(err);
      res.send(result);
  });
});

//Notification methods to get and post
app.post("/createNotification", function (req, res) {
  db.collection("Notification").insertOne(req.body, (err) => {
    if (err) throw err;
    console.log("1 Notification inserted");
  });
  res.json({ message: "Success" });
});

app.get('/retrieveNotification', (req, res) => {
  db.collection('Notification').find({}).toArray(function(err, result) {
      if (err) console.error(err);
      res.send(result);
  });
});

//Posture methods to get and post
app.post("/createPosture", function (req, res) {
  db.collection("Posture").insertOne(req.body, (err) => {
    if (err) throw err;
    console.log("1 Posture inserted");
  });
  res.json({ message: "Success" });
});

app.get('/retrievePosture', (req, res) => {
  db.collection('Posture').find({}).toArray(function(err, result) {
      if (err) console.error(err);
      res.send(result);
  });
});

//Progress methods to get and post
app.post("/createProgress", function (req, res) {
  db.collection("Progress").insertOne(req.body, (err) => {
    if (err) throw err;
    console.log("1 Progress inserted");
  });
  res.json({ message: "Success" });
});

app.get('/retrieveProgress', (req, res) => {
  db.collection('Progress').find({}).toArray(function(err, result) {
      if (err) console.error(err);
      res.send(result);
  });
});

//ReportTemplate methods to get and post
app.post("/createReportTemplate", function (req, res) {
  db.collection("ReportTemplate").insertOne(req.body, (err) => {
    if (err) throw err;
    console.log("1 Report Template inserted");
  });
  res.json({ message: "Success" });
});

app.get('/retrieveReportTemplate', (req, res) => {
  db.collection('ReportTemplate').find({}).toArray(function(err, result) {
      if (err) console.error(err);
      res.send(result);
  });
});

//SeverityCategoryScore methods to get and post
app.post("/createSeverityCategoryScore", function (req, res) {
  db.collection("SeverityCategoryScore").insertOne(req.body, (err) => {
    if (err) throw err;
    console.log("1 Severity Category Score inserted");
  });
  res.json({ message: "Success" });
});

app.get('/retrieveSeverityCategoryScore', (req, res) => {
  db.collection('SeverityCategoryScore').find({}).toArray(function(err, result) {
      if (err) console.error(err);
      res.send(result);
  });
});

//ThreatLevel methods to get and post
app.post("/createThreatLevel", function (req, res) {
  db.collection("ThreatLevel").insertOne(req.body, (err) => {
    if (err) throw err;
    console.log("1 Threat Level inserted");
  });
  res.json({ message: "Success" });
});

app.get('/retrieveThreatLevel', (req, res) => {
  db.collection('ThreatLevel').find({}).toArray(function(err, result) {
      if (err) console.error(err);
      res.send(result);
  });
});