const express = require("express");
const bodyParser = require("body-parser");

const PORT = 8080;

const app = express();

const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";
const dbName = "fric_sw";
let db = null;

var eventRouter = require("./routes/events");
var systemRouter = require("./routes/system");
var taskRouter = require("./routes/task");
var subtaskRouter = require("./routes/subtask");
var findingRouter = require("./routes/findings");

app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/events", eventRouter);
app.use("/system", systemRouter);
app.use("/task", taskRouter);
app.use("/subtask", subtaskRouter);
app.use("/findings", findingRouter);

app.listen(PORT, () => {
  console.log("Server Running");
});

MongoClient.connect(url, { useUnifiedTopology: true })
  .then((client) => {
    console.log("Connected to Database");
    db = client.db(dbName);
  })
  .catch((error) => {
    console.error(error.message);
  });
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

module.exports = app;
