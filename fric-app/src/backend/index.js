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
})

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
})

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
})

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
})

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
})

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
})

//Post method for creating a log
app.post("/createLog", function (req, res) {
  db.collection("Logs").insertOne(req.body, (err) => {
    if (err) throw err;
    console.log("1 Log");
  });
  res.json({ message: "Success" });
});
