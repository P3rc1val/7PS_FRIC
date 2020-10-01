//Lists
var List = require("collections/list");

//not sure if needed
var express = require('express');
var router = express.Router();

//Connect to MongoDB
var mongodb=require('mongodb');
var MongoClient = mongodb.MongoClient;

//templete
router.post('/create',(req,res,next)=>{
    MongoClient.connect(global.mongoURL,{useNewUrlParser:true} ,function(err, client) {
        if (err) {
            console.log("Unable to connect to MongoDB",err);
        }else{
            var data=req.body;
            console.log(data);
            //Event Name
            var name=data.name;
            //Event Description
            var description=data.description;
            //Event Type
            var type = data.type;
            //Event Version
            var version = data.version;
            //Assessment Date
            var date=new Date(Date.now()-(60000*60*6)).toISOString().replace(/T/, ' ').replace(/\..+/, '');
            //Organization Name
            var orgName = data.orgName;
            //Security Classification Title Guide
            var secClass = data.secClass;
            //Event Classification
            var clas = data.clas;
            //Declassification Date
            var declass = new Date(Date.now()-(60000*60*6)).toISOString().replace(/T/, ' ').replace(/\..+/, '');
            //Customer Name
            var customer = data.customer;
            //Archive Status (Might change to a method that checks if event is in archive collection)
            var archStat = data.archStat;
            //Team for event
            var team = new List([data.team]) 
            
            var json={
                'name' : name,
                'description':description,
                'type':type,
                'version':version,
                'date':date,
                'organization': orgName,
                'Security':secClass,
                'classification':clas,
                'declassification':declass,
                'customer':customer,
                'archive':archStat,
                'team':team
            };
            console.log(json);
            var db=client.db('app');
            //Events or Test collections
            db.collection('Events').insertOne(json, function(err, result) {
                if (err) throw err;
                console.log("1 document inserted");
                res.setHeader('Content-Type', 'application/json');
                res.send(result["ops"]);
                res.end()
            });
            client.close();
        }
    });
});

module.exports = router;
