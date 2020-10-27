import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import SubtaskTable from "../Tables/SubtaskTable.js";
import SubtaskOptions from "../OptionMenus/SubtaskOptions.js";
import SubtaskDetails from "../DetailViews/SubtaskDetails.js";
import TableTabs from "../TabComponent/TableTabs.js";
import "../App.css";

class ConfigContentView extends Component {
  render() {
    return (
      <container>
        <rectRow>
          <TableTabs />
        </rectRow>
      </container>
    );
  }
}

export default ConfigContentView;
