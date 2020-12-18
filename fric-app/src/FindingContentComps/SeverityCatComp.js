import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import eventTable from "../Tables/EventTable.js";
import ReactDOM from "react-dom";
import SeverityCatDetailForm from "./SeverityCatDetailForm.js"

class SeverityCatComp extends Component {

  render() {
    return (
      <container>
            <SeverityCatDetailForm /*fetchEvent={this.fetchEvent}*/ 
            //eventData = {this.state.data}
            />
      </container>
    );
  }
}

//---------------------------------------------------------------------------

export default SeverityCatComp;
