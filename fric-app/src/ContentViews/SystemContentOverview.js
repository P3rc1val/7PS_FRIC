import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import SystemTable from "../Tables/SystemTable.js";
import SystemOptions from "../OptionMenus/SystemOptions.js";
import SystemDetails from "../DetailViews/SystemDetails.js";
import "../App.css";
class SystemContentView extends Component {
  render() {
    return (
      <container>
        <rectRow>
          <rect3Column>
            <SystemTable />
            <SystemOptions />
          </rect3Column>
          <SystemDetails />
        </rectRow>
      </container>
    );
  }
}

export default SystemContentView;
