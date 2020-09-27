import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import FindingTable from "../Tables/FindingTable.js";
import FindingOptions from "../OptionMenus/FindingOptions.js";
import FindingDetails from "../DetailViews/FindingDetails.js";
import ReportOptions from "../OptionMenus/ReportOptions.js";

class FindingContentView extends Component {
  render() {
    return (
      <Container>
        <RectRow>
          <Rect3Column>
            <FindingTable />
            <FindingOptions />
            <ReportOptions />
          </Rect3Column>
          <FindingDetails />
        </RectRow>
      </Container>
    );
  }
}

//---------------------------------------------------------------------------

const Container = styled.div`
  display: flex;

  flex-direction: column;

  float: right;
`;

const Rect3Column = styled.div`
  width: 850px;
  flex-direction: column;
  display: flex;
  margin-left: 19px;
  margin-top: 28px;
  margin-bottom: 28px;
`;

const RectRow = styled.div`
  height: 768px;
  flex-direction: row;
  display: flex;
  margin-right: 33px;
`;

export default FindingContentView;
