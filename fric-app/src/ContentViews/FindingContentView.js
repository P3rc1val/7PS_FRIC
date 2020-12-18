import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import FindingTable from "../Tables/FindingTable.js";
import FindingOptions from "../OptionMenus/FindingOptions.js";
import FindingDetails from "../DetailViews/FindingDetails.js";
import ReportOptions from "../OptionMenus/ReportOptions.js";
import "../App.css";
import FindingTabs from "../TabComponent/FindingTabs.js";
import FindingOverview from "../ConfigContentTables/FindingOverview.js";
import FindingType from "../ConfigContentTables/FindingType";
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
            
            
            <FindingTabs />
          </rect3Column>
          
          <div label="Finding Type">
          <FindingDetails />
          <FindingType
            findingTypeData = {this.state.data}
            getFindingType = {this.getFindingType}
            state = {this.state}
            />
            </div>
        </rectRow>
      </container>
    );
  }
}

//---------------------------------------------------------------------------

export default FindingContentView;
