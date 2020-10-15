import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import SubtaskTable from "../Tables/SubtaskTable.js";
import SubtaskOptions from "../OptionMenus/SubtaskOptions.js";
import SubtaskDetails from "../DetailViews/SubtaskDetails.js";
import "../App.css";
class SubtaskContentView extends Component {
  render() {
    return (
      <container>
        <rectRow>
          <rect3Column>
            <SubtaskTable />
          </rect3Column>
          <SubtaskDetails />
        </rectRow>
      </container>
    );
  }
}

//---------------------------------------------------------------------------

export default SubtaskContentView;
