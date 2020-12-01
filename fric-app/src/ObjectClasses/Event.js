import React, { Component } from "react";
class Event{
	constructor(props) {
		super(props);
		this.state  ={
			eventName:null,
			noOfSystems:null, 
			noOfFindings:null, 
			progress:null,
			archive:false,
			id:null,
			counterMeasure: ["Very high", "High", "Moderate", "Low", "Very Low"],
			eventClass: ["Top secret", "Secret", "Confidential", "Classified", "Unclassified"],
			eventRules: ["Rule1", "Rule2", "Rule3", "Rule4", "Rule5"],
			eventType: ["CVPA", "CVI", "VOF"],
			findingClass: ["Vulnerability", "Information"],
			findingImpactLevel: [["Low","Medium","High"],["Medium","High","Medium"], ["High","High","Information"], ["Information","Low","Hight"] ],
			findingType: ["Credentials Complexity", "Manufacturer Default Creds", "Lack of Authentication", "Plain Text Protocols", "Plain Text Web Login"],
			impact: ["VH", "H", "M", "L", "VL"],
			level: [[12, "Title1", "System1", "Task1", "Finding1", "Analyst1", "Open", "Vulnerability","Credentials Complexity", "Info"], [23, "Title2", "System2", "Task2", "Finding2","Analyst2", "Closed", "Information", "Manufacturer Default Creds", "VL"], [45, "Title3", "System3", "Task3", "Finding3","Analyst3", "Open", "Vulnerability", "Lack of Authentication", "VH"], [67, "Title4", "System4", "Task4", "Finding4","Analyst4", "Closed", "Information", "Plain Text Protocols", "Info"], [89, "Title5", "System5", "Task5", "Finding5","Analyst5", "Open", "Vulnerability", "Plain Text Web Login", "M"]],
			notification: [["1h","1:00 pm"], ["2h","2:00 pm"], ["3h","3:00 pm"], ["4h","4:00 pm"], ["5h","5:00 pm"]],
			posture: ["Insider", "Insider-nearsider", "Outsider", "Nearsider", "Nearsider-outsider"],
			progress: ["Not started", "assigned", "transferred", "in progress", "complete"],
			reportTemplate: [],
			severityCategoryScore: ["I", "II", "III"],
			threatLevel: ["Confirmed", "Expected", "Anticipated", "Predicted", "Possible"]
		}
	}
}
export default Event;