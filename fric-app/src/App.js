import React, { Component } from "react";
import styled, { css } from "styled-components";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//import LoginView from "./Login/LoginView";
import FricMenu from "./OptionMenus/FricMenu.js";
//import { render } from "@testing-library/react";

function System(props) {
  // var loginState = false;
  // if (loginState) {
  ReactDOM.render(
    <body>
      <mainwindow>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <menuOptions>
          <FricMenu />
          <eventTable />
        </menuOptions>
      </mainwindow>
    </body>,
    document.body
  );
  // } else {
  //   ReactDOM.render(
  //     <div>
  //       <LoginView />
  //     </div>
  //   );
  // }
  const mainwindow = styled.div`
    backgroundcolor: 5b5656;
    width: 80%;
    height: 100vh;
  `;

  const overviewContainer = styled.div`
    padding-left: 104px;
    float: right;
    height: 100vh;
  `;

  return null;
}
export default System;
