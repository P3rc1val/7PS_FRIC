import React, { Component } from "react";
import styled, { css } from "styled-components";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import LoginView from "./Login/LoginView";
import FricMenu from "./OptionMenus/FricMenu.js";
//import { render } from "@testing-library/react";

function System(props) {
  // var loginState = false;
  // if (loginState) {
  ReactDOM.render(
    <mainwindow>
      <menuOptions>
        <FricMenu />
        <eventTable />
      </menuOptions>
    </mainwindow>,
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
