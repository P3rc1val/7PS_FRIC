import React, { Component } from "react";
import styled, { css } from "styled-components";
import "../App.css";
import EventDetailViewForm from "./EventDetailViewForm.js";
class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      eventDescription: "",
      eventType: "",
      eventVersion: "",
      eventAssesment: "",
      assesmentDate: "",
      orgName: "",
      SCTG: "",
      eClass: "",
      dDate: "",
      cName: "",
      initial: "",
      myList: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveEvent = this.saveEvent.bind(this);
  }
  async saveEvent(event) {
    event.preventDefault();
    await fetch("http://localhost:8080/createEvent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    });
    console.log(this.state);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <EventDetailViewForm
        saveEvent={this.saveEvent}
        handleChange={this.handleChange}
        state={this.state}
      />
    );
  }
}
export default EventDetails;
