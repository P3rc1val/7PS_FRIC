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
//import { render } from "@testing-library/react";

function System(props) {
  ReactDOM.render(
    <mainwindow>
      <menuOptions>
        <FricMenu />
      </menuOptions>
      <overviewContainer>
        <FindingContentView />
      </overviewContainer>
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
  //   display: flex;
  //   border-width: 1px;
  //   border-color: #000000;
  //   flex-direction: column;
  //   border-style: solid;
  // `;

  // const Rect = styled.div`
  //   width: 104px;
  //   height: 768px;
  //   background-color: #e6e6e6;
  //   flex-direction: column;
  //   display: flex;
  // `;

  // const FricMenuTitle = styled.span`
  //   border-radius: 9px;
  //   flex-direction: column;
  //   display: flex;
  // `;

  // const Event = styled.div`
  //   border-radius: 9px;
  //   flex-direction: column;
  //   display: flex;
  // `;

  // const Systems = styled.div`
  //   border-radius: 9px;
  //   flex-direction: column;
  //   display: flex;
  // `;

  // const Tasks = styled.div`
  //   border-radius: 9px;
  //   flex-direction: column;
  //   display: flex;
  // `;

  // const Subtask = styled.div`
  //   border-radius: 9px;
  //   flex-direction: column;
  //   display: flex;
  // `;

  // const Findings = styled.div`
  //   border-radius: 9px;
  //   flex-direction: column;
  //   display: flex;
  // `;

  // const Archive = styled.div`
  //   border-radius: 9px;
  //   flex-direction: column;
  //   display: flex;
  // `;

  // const Configuration = styled.div`
  //   border-radius: 9px;
  //   flex-direction: column;
  //   display: flex;
  // `;

  // const Setup = styled.div`
  //   border-radius: 9px;
  //   flex-direction: column;
  //   display: flex;
  // `;

  // const Help = styled.div`
  //   border-radius: 9px;
  //   flex-direction: column;
  //   display: flex;
  // `;

  // const ContextViewContainer = styled.div`
  //   width: 485px;
  //   height: 719px;
  //   background-color: #e6e6e6;
  //   border-radius: 2px;
  //   flex-direction: column;
  //   display: flex;
  //   margin-left: 26px;
  //   margin-top: 23px;
  // `;

  // const ContextView = styled.span`
  //   font-family: Roboto;
  //   font-style: normal;
  //   font-weight: 400;
  //   color: #121212;
  //   margin-top: 20px;
  //   margin-left: 27px;
  // `;

  // const EventTreeContainer = styled.div`
  //   width: 684px;
  //   height: 397px;
  //   background-color: #e6e6e6;
  //   border-radius: 2px;
  //   flex-direction: column;
  //   display: flex;
  // `;

  // const EventTree = styled.span`
  //   font-family: Roboto;
  //   font-style: normal;
  //   font-weight: 400;
  //   color: #121212;
  //   margin-top: 23px;
  //   margin-left: 26px;
  // `;

  // const SearchBoxContainer = styled.div`
  //   width: 684px;
  //   height: 291px;
  //   background-color: #e6e6e6;
  //   border-radius: 2px;
  //   flex-direction: column;
  //   display: flex;
  //   margin-top: 31px;
  // `;

  // const SearchBox = styled.span`
  //   font-family: Roboto;
  //   font-style: normal;
  //   font-weight: 400;
  //   color: #121212;
  //   margin-top: 25px;
  //   margin-left: 34px;
  // `;

  // const Rect2Column = styled.div`
  //   width: 684px;
  //   flex-direction: column;
  //   display: flex;
  //   margin-left: 33px;
  //   margin-top: 23px;
  //   margin-bottom: 26px;
  // `;

  // const RectRow = styled.div`
  //   height: 768px;
  //   flex-direction: row;
  //   display: flex;
  //   margin-right: 34px;
  // `;
  return null;
}
export default System;
