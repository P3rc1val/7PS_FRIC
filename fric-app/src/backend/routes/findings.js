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
      //Finding ID
      var id = data.id;
      //Host Name
      var host = data.host;
      //IP Port
      var ip = data.ip;
      //Finding Small Description
      var sDescription = data.sDescription;
      //Finding Long Description
      var description = data.description;
      //Finding Status
      var stat = data.stat;
      //Finding Type
      var type = data.type;
      //Finding Classification
      var clas = data.clas;
      //Findign Association
      var assos = data.assoc;
      //Evidence needs to be changed for a file
      var evidence = data.evidence;
      //Archive Status (Might change to a method that checks if event is in archive collection)
      var archStat = data.archStat;
      //Impact (CIA Scores)
      //CIA Scores
      var confidentiality = data.confidentiality;
      var integrity = data.integrity;
      var availability = data.availability;
      //Analyst Assignment
      var analyst = new List([data.analyst]);
      //Collaborator Assignment
      var collab = new List([data.collab]);
      //Posture
      var posture = data.posture;
      //mitigation small description
      var mitSdescription = data.mitSdescription;
      //mitigation long description
      var mitLdescription = data.mitLdescription;
      //threat relevance
      var relevance = data.relevance;
      //countermeasure effectiveness
      var effectiveness = data.effectiveness;
      //impact description
      var impDescription = data.impDescription;
      //impact level
      var impLevel = data.impLevel;
      //Severity Category Code
      var severityCode = data.severityCode;
      //Severity Category Score
      var severityScore = data.severityScore;
      //Vulnerability Severity
      var vulnerability = data.vulnerability;
      //Quantitative Severity
      var qVulSeverity = data.qVulSeverity;
      //Risk
      var risk = data.risk;
      //Risk likehood
      var likehood = data.likehood;
      //CIA Scores on System
      var systemConfidentiality = data.systemConfidentiality;
      var systemIntegrity = data.systemIntegrity;
      var systemAvailability = data.systemAvailability;
      //Impact Score
      var impactScore = data.impactScore;

      var json = {
        id: id,
        host: host,
        ip: ip,
        sDescription: sDescription,
        description: description,
        stat: stat,
        type: type,
        classification: clas,
        asossiation: assos,
        evidence: evidence,
        archStat: archStat,
        Confidentiality: confidentiality,
        Integrity: integrity,
        Availability: availability,
        analyst: analyst,
        collab: collab,
        posture: posture,
        MitigationBriefDescription: mitSdescription,
        MitigationLongDespcription: mitLdescription,
        Relevance: relevance,
        CountermeasureEfectiveness: effectiveness,
        ImpactDescription: impDescription,
        ImpactLevel: impLevel,
        SeverityCode: severityCode,
        SeverityScore: severityScore,
        VulnerabilitySeverity: vulnerability,
        QuantitativeSeverity: qVulSeverity,
        Risk: risk,
        RiskLikehood: likehood,
        ConfidentialityOnSystem: systemConfidentiality,
        IntegrityOnSystem: systemIntegrity,
        AvailabilitySystem: systemAvailability,
        ImpactScore: impactScore,
      };
      console.log(json);
      var db = client.db("app");
      //reports or Test collections
      db.collection("Findings").insertOne(json, function (err, result) {
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
