import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import SubtaskTable from "../Tables/SubtaskTable.js";
import SubtaskOptions from "../OptionMenus/SubtaskOptions.js";
import SubtaskDetails from "../DetailViews/SubtaskDetails.js";
import TableTabs from "../TabComponent/TableTabs.js";

class ConfigContentView extends Component {
  render() {
    return (
      <Container>
        <RectRow>
          <TableTabs />
        </RectRow>
      </Container>
    );
  }
}

//---------------------------------------------------------------------------

const Container = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;

  float: right;
`;

const Rect3Column = styled.div`
  width: 70%;
  flex-direction: column;
  display: flex;
  margin-left: 19px;
  margin-top: 28px;
  margin-bottom: 28px;
`;

const RectRow = styled.div`
  height: 70%;
  flex-direction: row;
  display: flex;
  margin-right: 33px;
`;

export default ConfigContentView;
