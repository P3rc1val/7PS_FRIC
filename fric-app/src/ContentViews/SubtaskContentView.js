import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import SubtaskTable from "../Tables/SubtaskTable.js";
import SubtaskOptions from "../OptionMenus/SubtaskOptions.js";
import SubtaskDetails from "../DetailViews/SubtaskDetails.js";
import "../App.css";
class SubtaskContentView extends Component {
  constructor(props){
    super(props);
    this.state ={
      data: []
    };
    this.getSystem = this.getSystem.bind(this);
  }

  getSystem(){
    console.log(this.state.data)
    fetch('http://localhost:8080/retrieveSystem')
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
            <SubtaskTable subTask = {this.state.data}
              getSystem = {this.getSystem}
              state = {this.state} />
          </rect3Column>
          <SubtaskDetails />
        </rectRow>
      </container>
    );
  }
}

//---------------------------------------------------------------------------

export default SubtaskContentView;
