import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Router, Link, Route, BrowserRouter } from "react-router-dom";
import FricMenu from "./FricMenu.js";
import GeneralView from "./GeneralView.js";
import EventContentView from "./EventContentView.js";
import SystemContentView from "./SystemContentOverview.js";
import TaskContentView from "./TaskContentOverview.js";
import SubtaskContentView from "./SubtaskContentView.js";
import FindingContentView from "./FindingContentView.js";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
//import { render } from "@testing-library/react";

function System(props) {
  ReactDOM.render(
    <mainwindow>
      <menuOptions>
        <FricMenu />
        <eventTable />
      </menuOptions>
    </mainwindow>,
    document.body
  );

  const mainwindow = styled.div`
    width: 80%;
  `;

  const menuOptions = styled.div``;

  const overviewContainer = styled.div`
    padding-left: 104px;
    float: right;
  `;

  return null;
}
export default System;
