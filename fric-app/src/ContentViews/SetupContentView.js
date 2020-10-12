import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
//import SetupTable from "../Tables/SetupTable.js";
import SetupOptions from "../OptionMenus/SetupOptions.js";
import SetupDetails from "../DetailViews/SetupDetails.js";
import LoginView from "../Login/LoginView.js";

class SetupContentView extends Component {
  render() {
    return (
      <Container>
        <RectRow>
          <Rect3Column></Rect3Column>
          <SetupDetails />
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
  width: 750px;
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

export default SetupContentView;
