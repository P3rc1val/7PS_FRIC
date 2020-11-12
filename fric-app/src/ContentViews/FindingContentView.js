import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import FindingTable from "../Tables/FindingTable.js";
import FindingOptions from "../OptionMenus/FindingOptions.js";
import FindingDetails from "../DetailViews/FindingDetails.js";
import ReportOptions from "../OptionMenus/ReportOptions.js";
import "../App.css";
class FindingContentView extends Component {

  constructor(props){
    super(props);
    this.state ={
      data: []
    };
    this.getFinding = this.getFinding.bind(this);
  }

  getFinding(){
    console.log(this.state.data)
    fetch('http://localhost:8080/retrieveFinding')
    .then(response => response.json())
    .then(data => this.setState({
        data: data
    }))
    .catch(error => console.error(error))
  }

  componentDidMount(){
      this.getFinding();
  }

  render() {
    return (
      <container>
        <rectRow>
          <rect3Column>
            <FindingTable 
            findingData = {this.state.data}
            getFinding = {this.getFinding}
            state = {this.state}
            />
          </rect3Column>
          <FindingDetails />
        </rectRow>
      </container>
    );
  }
}

//---------------------------------------------------------------------------

export default FindingContentView;
