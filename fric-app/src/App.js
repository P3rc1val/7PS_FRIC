import React, { Component } from "react";
import styled, { css } from "styled-components";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";
import InitialView from "./Login/LoginView.js"

//import LoginView from "./Login/LoginView";
import FricMenu from "./OptionMenus/FricMenuBackup.js";
//import { render } from "@testing-library/react";

class System extends Component {
  
 render(){return(
      <body style = {{backgroundColor:"white"}}>
      <div>
        <InitialView />
      </div>
      </body>
    );
 }
};
export default System;
