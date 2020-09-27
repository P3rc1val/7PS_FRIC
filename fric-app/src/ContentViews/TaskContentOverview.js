import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import TaskTable from "../Tables/TaskTable.js";
import TaskOptions from "../OptionMenus/TaskOptions.js";
import TaskDetails from "../DetailViews/TaskDetail.js";

class TaskContentView extends Component {
  render() {
    return (
      <Container>
        <RectRow>
          <Rect3Column>
            <TaskTable />

            <TaskOptions />
          </Rect3Column>
          <TaskDetails />
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

export default TaskContentView;
