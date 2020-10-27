import React, { Component } from "react";
import EventOptions from "../OptionMenus/EventOptions.js";
import ArchiveTable from "../Tables/ArchiveTable.js";
import EventDetails from "../DetailViews/EventDetails.js";
import "../App.css";

const ArchiveContentView = () => {
  return (
    <container>
      <rectRow>
        <rect3Column>
          <ArchiveTable />
        </rect3Column>
        <EventDetails />
      </rectRow>
    </container>
  );
};

export default ArchiveContentView;
