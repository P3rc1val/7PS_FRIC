import React, { Component } from "react";
import EventOptions from "../OptionMenus/EventOptions.js";
import EventTable from "../Tables/EventTable.js";
import EventDetails from "../DetailViews/EventDetails.js";
import "../App.css";

const ArchiveContentView = () => {
  return (
    <container>
      <rectRow>
        <rect3Column>
          <EventTable />

          <EventOptions />
        </rect3Column>
        <EventDetails />
      </rectRow>
    </container>
  );
};

export default ArchiveContentView;
