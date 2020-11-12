import React, { Component } from "react";
import Tabs from "./Tabs";
import "./Tabstyle.css";
import CounterMeasure from "../ConfigContentTables/CounterMeasure";
import EventClassification from "../ConfigContentTables/EventClassification";
import EventRules from "../ConfigContentTables/EventRules";
import EventType from "../ConfigContentTables/EventType";
import FindingClassification from "../ConfigContentTables/FindingClassification";
import FindingImpactLevel from "../ConfigContentTables/FindingImpactLevel";
import FindingType from "../ConfigContentTables/FindingType";
import Impact from "../ConfigContentTables/Impact";
import Level from "../ConfigContentTables/Level";
import Notification from "../ConfigContentTables/Notification";
import Posture from "../ConfigContentTables/Posture";
import Progress from "../ConfigContentTables/Progress";
import ReportTemplate from "../ConfigContentTables/ReportTemplate";
import SeverityCatagoryCode from "../ConfigContentTables/SeverityCatagoryCode";
import ThreatLevel from "../ConfigContentTables/ThreatLevel";

class TableTabs extends Component {
  
  constructor(props){
    super(props);
    this.state ={
      data: []
    };
    this.getFindingType = this.getFindingType.bind(this);
    this.getPosture = this.getPosture.bind(this);
    this.getThreatLevel = this.getThreatLevel.bind(this);
    this.getImpact = this.getImpact.bind(this);
    this.getFindingClassification = this.getFindingClassification.bind(this);
    this.getCounterMeasure = this.getCounterMeasure.bind(this);
    this.getEventClassification = this.getEventClassification.bind(this);
    this.getLevel = this.getLevel.bind(this);
    this.getEventType = this.getEventType.bind(this);
    this.getFindingImpactLevel = this.getFindingImpactLevel.bind(this);
    this.getSeverityCategoryCode = this.getSeverityCategoryCode.bind(this);
    this.getProgress = this.getProgress.bind(this);
    this.getEventRules = this.getEventRules.bind(this);
    this.getReportTemplate = this.getReportTemplate.bind(this);
    this.getNotification = this.getNotification.bind(this);
  }


  getFindingType(){
    console.log(this.state.data)
    fetch('http://localhost:8080/findingTypeTable')
    .then(response => response.json())
    .then(data => this.setState({
        data: data
    }))
    .catch(error => console.error(error))
  }

  getPosture(){
    console.log(this.state.data)
    fetch('http://localhost:8080/postureTable')
    .then(response => response.json())
    .then(data => this.setState({
        data: data
    }))
    .catch(error => console.error(error))
  }

  getThreatLevel(){
    console.log(this.state.data)
    fetch('http://localhost:8080/threatLevelTable')
    .then(response => response.json())
    .then(data => this.setState({
        data: data
    }))
    .catch(error => console.error(error))
  }

  getImpact(){
    console.log(this.state.data)
    fetch('http://localhost:8080/impactTable')
    .then(response => response.json())
    .then(data => this.setState({
        data: data
    }))
    .catch(error => console.error(error))
  }

  getFindingClassification(){
    console.log(this.state.data)
    fetch('http://localhost:8080/findingClassificationTable')
    .then(response => response.json())
    .then(data => this.setState({
        data: data
    }))
    .catch(error => console.error(error))
  }

  getCounterMeasure(){
    console.log(this.state.data)
    fetch('http://localhost:8080/counterMeasureTable')
    .then(response => response.json())
    .then(data => this.setState({
        data: data
    }))
    .catch(error => console.error(error))
  }

  getEventClassification(){
    console.log(this.state.data)
    fetch('http://localhost:8080/eventClassificationTable')
    .then(response => response.json())
    .then(data => this.setState({
        data: data
    }))
    .catch(error => console.error(error))
  }

  getLevel(){
    console.log(this.state.data)
    fetch('http://localhost:8080/levelTable')
    .then(response => response.json())
    .then(data => this.setState({
        data: data
    }))
    .catch(error => console.error(error))
  }

  getEventType(){
    console.log(this.state.data)
    fetch('http://localhost:8080/eventTypeTable')
    .then(response => response.json())
    .then(data => this.setState({
        data: data
    }))
    .catch(error => console.error(error))
  }

  getFindingImpactLevel(){
    console.log(this.state.data)
    fetch('http://localhost:8080/findingImpactLevelTable')
    .then(response => response.json())
    .then(data => this.setState({
        data: data
    }))
    .catch(error => console.error(error))
  }

  getSeverityCategoryCode(){
    console.log(this.state.data)
    fetch('http://localhost:8080/severityCategoryCodeTable')
    .then(response => response.json())
    .then(data => this.setState({
        data: data
    }))
    .catch(error => console.error(error))
  }

  getProgress(){
    console.log(this.state.data)
    fetch('http://localhost:8080/progressTable')
    .then(response => response.json())
    .then(data => this.setState({
        data: data
    }))
    .catch(error => console.error(error))
  }

  getEventRules(){
    console.log(this.state.data)
    fetch('http://localhost:8080/eventRulesTable')
    .then(response => response.json())
    .then(data => this.setState({
        data: data
    }))
    .catch(error => console.error(error))
  }

  getReportTemplate(){
    console.log(this.state.data)
    fetch('http://localhost:8080/reportTemplateTable')
    .then(response => response.json())
    .then(data => this.setState({
        data: data
    }))
    .catch(error => console.error(error))
  }

  getNotification(){
    console.log(this.state.data)
    fetch('http://localhost:8080/notificationTable')
    .then(response => response.json())
    .then(data => this.setState({
        data: data
    }))
    .catch(error => console.error(error))
  }



  componentDidMountFindingType(){
      this.getFindingType();
  }

  componentDidMountPosture(){
    this.getPosture();
  }

  componentDidMountThreatLevel(){
    this.getThreatLevel();
  }

  componentDidMountImpact(){
    this.getImpact();
  }

  componentDidMountFindingClassification(){
    this.getFindingClassification();
  }

  componentDidMountCounterMeasure(){
    this.getCounterMeasure();
  }

  componentDidMountEventClassification(){
    this.getEventClassification();
  }

  componentDidMountLevel(){
    this.getLevel();
  }

  componentDidMountEventType(){
    this.getEventType();
  }

  componentDidMountFindingImpactLevel(){
    this.getFindingImpactLevel();
  }

  componentDidMountSeverityCategoryCode(){
    this.getSeverityCategoryCode();
  }

  componentDidMountProgress(){
    this.getProgress();
  }

  componentDidMountEventRules(){
    this.getEventRules();
  }

  componentDidMountReportTemplate(){
    this.getReportTemplate();
  }

  componentDidMountNotification(){
    this.getNotification();
  }


render() {
  return (
    <div>
      <h1>Tables</h1>
      <Tabs>
        <div label="Finding Type">

          <FindingType
            findingTypeData = {this.state.data}
            getFindingType = {this.getFindingType}
            state = {this.state}
            />

        </div>
        <div label="Posture ">
          <Posture 
            postureData = {this.state.data}
            getPosture = {this.getPosture}
            state = {this.state}
          />
        </div>
        <div label="Threat Level">
          <ThreatLevel 
            threatLevelData = {this.state.data}
            getThreatLevel = {this.getThreatLevel}
            state = {this.state}
          />
        </div>
        <div label="Impact">
          <Impact 
            impactData = {this.state.data}
            getImpact = {this.getImpact}
            state = {this.state}
          />
        </div>
        <div label="Finding Classification">
          <FindingClassification 
            findingClassificationData = {this.state.data}
            getFindingClassification = {this.getFindingClassification}
            state = {this.state}
          />
        </div>
        <div label="CounterMeasure">
          <CounterMeasure 
            counterMeasureData = {this.state.data}
            getCounterMeasure = {this.getCounterMeasure}
            state = {this.state}
          />
        </div>
        <div label="Event Classification">
          <EventClassification 
            eventClassificationData = {this.state.data}
            getEventClassification = {this.getEventClassification}
            state = {this.state}
          />
        </div>
        <div label="Level">
          <Level 
            levelData = {this.state.data}
            getLevel = {this.getLevel}
            state = {this.state}
          />
        </div>
        <div label="Event Type">
          <EventType 
            eventTypeData = {this.state.data}
            getEventType = {this.getEventType}
            state = {this.state}
          />
        </div>
        <div label="Finding Impact Level">
          <FindingImpactLevel 
            findingImpactLevelData = {this.state.data}
            getFindingImpactLevel = {this.getFindingImpactLevel}
            state = {this.state}
          />
        </div>
        <div label="Severity Category Code">
          <SeverityCatagoryCode 
            severityCategoryCodeData = {this.state.data}
            getSeverityCategoryCode = {this.getSeverityCategoryCode}
            state = {this.state}
          />
        </div>
        <div label="Progress">
          <Progress 
            progressData = {this.state.data}
            getProgress = {this.getProgress}
            state = {this.state}
          />
        </div>
        <div label="Event Rules">
          <EventRules 
            eventRulesData = {this.state.data}
            getEventRules = {this.getEventRules}
            state = {this.state}
          />
        </div>
        <div label="Report Template">
          <ReportTemplate 
            reportTemplateData = {this.state.data}
            getReportTemplate = {this.getReportTemplate}
            state = {this.state}
          />
        </div>
        <div label="Notification">
          <Notification 
            notificationData = {this.state.data}
            getNotification = {this.getNotification}
            state = {this.state}
          />
        </div>
      </Tabs>
    </div>
    );
  }
}

export default TableTabs;
