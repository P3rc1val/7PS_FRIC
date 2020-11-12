import React from "react";
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
const TableTabs = () => {
  return (
    <div>
      <h1>Tables</h1>
      <Tabs>
        <div label="Finding Type">
          <FindingType  />
        </div>
        <div label="Posture ">
          <Posture />
        </div>
        <div label="Threat Level">
          <ThreatLevel />
        </div>
        <div label="Impact">
          <Impact />
        </div>
        <div label="Finding Classification">
          <FindingClassification />
        </div>
        <div label="CounterMeasure">
          <CounterMeasure />
        </div>
        <div label="Event Classification">
          <EventClassification />
        </div>
        <div label="Level">
          <Level />
        </div>
        <div label="Event Type">
          <EventType />
        </div>
        <div label="Finding Impact Level">
          <FindingImpactLevel />
        </div>
        <div label="Severity Category Code">
          <SeverityCatagoryCode />
        </div>
        <div label="Progress">
          <Progress />
        </div>
        <div label="Event Rules">
          <EventRules />
        </div>
        <div label="Report Template">
          <ReportTemplate />
        </div>
        <div label="Notification">
          <Notification />
        </div>
      </Tabs>
    </div>
  );
};

export default TableTabs;
