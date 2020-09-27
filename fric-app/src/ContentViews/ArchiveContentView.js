import React, { Component } from "react";
import styled, { css } from "styled-components";
import EventOptions from "../OptionMenus/EventOptions.js";
import EventTable from "../Tables/EventTable.js";
import EventDetails from "../DetailViews/EventDetails.js";

const ArchiveContentView = () => {
  return (
    <Container>
      <RectRow>
        <Rect3Column>
          <EventTable />

          <EventOptions />
        </Rect3Column>
        <EventDetails />
      </RectRow>
    </Container>
  );
};

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

export default ArchiveContentView;
