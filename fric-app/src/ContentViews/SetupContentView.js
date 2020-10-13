import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
//import SetupTable from "../Tables/SetupTable.js";
import SetupOptions from "../OptionMenus/SetupOptions.js";
import SetupDetails from "../DetailViews/SetupDetails.js";
import LoginView from "../Login/LoginView.js";
import "../App.css";
class SetupContentView extends Component {
  render() {
    return (
      <container>
        <rectRow>
          <rect3Column></rect3Column>
          <SetupDetails />
        </rectRow>
      </container>
    );
  }
}

//---------------------------------------------------------------------------

export default SetupContentView;
