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
app.listen(PORT, function() {
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

  app.post('/createEvent', function(req, res) {
    db.collection('Events').insertOne(req.body, (err, result) {
      if (err) throw err;
      console.log("1 Event inserted");
    });
  })

  app.post('/createSystem', function(req, res) {
    db.collection('Events').insertOne(req.body, (err, result) {
      if (err) throw err;
      console.log("1 System inserted");
    });
  })

  app.post('/createTask', function(req, res) {
    db.collection('Events').insertOne(req.body, (err, result) {
      if (err) throw err;
      console.log("1 Task inserted");
    });
  })

  app.post('/createSubtask', function(req, res) {
    db.collection('Events').insertOne(req.body, (err, result) {
      if (err) throw err;
      console.log("1 Subtask inserted");
    });
  })

  app.post('/createFindings', function(req, res) {
    db.collection('Events').insertOne(req.body, (err, result) {
      if (err) throw err;
      console.log("1 Finding inserted");
    });
  })