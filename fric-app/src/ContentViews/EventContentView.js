import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import eventTable from "../Tables/EventTable.js";
import ReactDOM from "react-dom";
import EventOptions from "../OptionMenus/EventOptions.js";
import EventTable from "../Tables/EventTable.js";
import EventDetails from "../DetailViews/EventDetails.js";

const EventContentView = () => {
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

//---------------------------------------------------------------------------

export default EventContentView;
