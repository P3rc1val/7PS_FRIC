import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import eventTable from "../Tables/EventTable.js";
import ReactDOM from "react-dom";
import EventOptions from "../OptionMenus/EventOptions.js";
import EventTable from "../Tables/EventTable.js";
import EventDetails from "../DetailViews/EventDetails.js";

class EventContentView extends Component {
  // constructor(props) {
  //   super(props);

  //   this.fetchEvent = this.fetchEvent.bind(this);
  // }
  // async fetchEvent(events) {
  //   events.preventDefault();
  //   await fetch("http://localhost:8080/retrieveEvent", {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.parse(this.events),
  //   });
  //   console.log(events);
  // }

  /*
  constructior(props){
    super(props);
    this.state ={
      data: []
    }
    this.updateData = this.updateData.bind(this);
  }

  updateData(){
    fetch('http://localhost:8080/retrieveEvent')
    .then(response => response.json())
    .then(data => this.setState({
        data: data
    }))
    .catch(error => console.error(error))
}
*/
  render() {
    return (
      
        <rectRow>
         
          <EventDetails />
        </rectRow>
      
    );
  }
}

//---------------------------------------------------------------------------

export default EventContentView;
