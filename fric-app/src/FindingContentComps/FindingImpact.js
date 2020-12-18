import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import eventTable from "../Tables/EventTable.js";
import ReactDOM from "react-dom";
import FindingImpactForm from "../FindingContentComps/FindingImpactDetailForm.js"

class FindingImpact extends Component {

  render() {
    return (
      <container>
            <FindingImpactForm /*fetchEvent={this.fetchEvent}*/ 
            //eventData = {this.state.data}
            />
      </container>
    );
  }
}

//---------------------------------------------------------------------------

export default FindingImpact;
