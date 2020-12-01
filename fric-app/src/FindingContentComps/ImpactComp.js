import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import eventTable from "../Tables/EventTable.js";
import ReactDOM from "react-dom";
import ImpactDetailForm from "./ImpactDetailForm.js"

class ImpactComp extends Component {

  render() {
    return (
      <container>
            <ImpactDetailForm /*fetchEvent={this.fetchEvent}*/ 
            //eventData = {this.state.data}
            />
      </container>
    );
  }
}

//---------------------------------------------------------------------------

export default ImpactComp;
