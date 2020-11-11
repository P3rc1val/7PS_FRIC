import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import TaskTable from "../Tables/TaskTable.js";
import TaskOptions from "../OptionMenus/TaskOptions.js";
import TaskDetails from "../DetailViews/TaskDetail.js";

class TaskContentView extends Component {
  constructor(props){
    super(props);
    this.state ={
      data: []
    };
    this.getSystem = this.getSystem.bind(this);
  }

  getSystem(){
    console.log(this.state.data)
    fetch('http://localhost:8080/retrieveTask')
    .then(response => response.json())
    .then(data => this.setState({
        data: data
    }))
    .catch(error => console.error(error))
  }

  componentDidMount(){
      this.getSystem();
  }
  render() {
    return (
      <container>
        <rectRow>
          <rect3Column>
            <TaskTable taskData = {this.state.data}
              getSystem = {this.getSystem}
              state = {this.state} />
          </rect3Column>
          <TaskDetails />
        </rectRow>
      </container>
    );
  }
}

//---------------------------------------------------------------------------

export default TaskContentView;
