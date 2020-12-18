import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import SystemTable from "../Tables/SystemTable.js";
import SystemOptions from "../OptionMenus/SystemOptions.js";
import SystemDetails from "../DetailViews/SystemDetails.js";
import "../App.css";
import { Button } from "@material-ui/core";

class SystemContentView extends Component {
  
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
            <SystemTable /*fetchSystem={this.fetchEvent} */
              systemData = {this.state.data}
              getSystem = {this.getSystem}
              state = {this.state}
              />
          </rect3Column>
          <SystemDetails />
        </rectRow>
      </container>
    );
  }
}

export default SystemContentView;
