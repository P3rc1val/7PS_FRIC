import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import SystemTable from "./Tables/SystemTable.js";
import SystemOptions from "./OptionMenus/SystemOptions.js";
import SystemDetails from "./DetailViews/SystemDetails.js";

class SystemContentView extends Component {
  render() {
    return (
      <Container>
        <RectRow>
          <Rect3Column>
            <SystemTable />
            <SystemOptions />
          </Rect3Column>

          <SystemDetails />
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
  width: 446px;
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

export default SystemContentView;
