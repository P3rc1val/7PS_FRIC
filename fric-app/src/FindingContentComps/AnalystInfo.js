import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import eventTable from "../Tables/EventTable.js";
import ReactDOM from "react-dom";
import AnalystInfoForm from "../FindingContentComps/AnalystInfoDetailForm.js"

class AnalystInfo extends Component {

  render() {
    return (
      <container>
            <AnalystInfoForm /*fetchEvent={this.fetchEvent}*/ 
            //eventData = {this.state.data}
            />
      </container>
    );
  }
}

//---------------------------------------------------------------------------

export default AnalystInfo;
