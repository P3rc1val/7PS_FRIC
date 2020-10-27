import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import TaskTable from "../Tables/TaskTable.js";
import TaskOptions from "../OptionMenus/TaskOptions.js";
import TaskDetails from "../DetailViews/TaskDetail.js";

class TaskContentView extends Component {
  render() {
    return (
      <container>
        <rectRow>
          <rect3Column>
            <TaskTable />
          </rect3Column>
          <TaskDetails />
        </rectRow>
      </container>
    );
  }
}

//---------------------------------------------------------------------------

export default TaskContentView;
