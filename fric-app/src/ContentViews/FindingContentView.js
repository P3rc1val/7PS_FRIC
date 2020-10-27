import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import FindingTable from "../Tables/FindingTable.js";
import FindingOptions from "../OptionMenus/FindingOptions.js";
import FindingDetails from "../DetailViews/FindingDetails.js";
import ReportOptions from "../OptionMenus/ReportOptions.js";
import "../App.css";
class FindingContentView extends Component {
  render() {
    return (
      <container>
        <rectRow>
          <rect3Column>
            <FindingTable />
          </rect3Column>
          <FindingDetails />
        </rectRow>
      </container>
    );
  }
}

//---------------------------------------------------------------------------

export default FindingContentView;
