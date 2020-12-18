import React, { Component } from "react";
import styled, { css } from "styled-components";
import "../App.css";
import DetailViewForm from "./AnalystTeamViewForm.js";
class AnalystTeam extends Component {
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
    this.saveAnalyst = this.saveAnalyst.bind(this);
  }
  async saveAnalyst(event) {
    event.preventDefault();
    await fetch("http://localhost:8080/createAnal;yst", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    });
    console.log(this.state);
  }
  handleChange(system) {
    const target = system.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  fetchEvent() {
    fetch("http://localhost:8080/retrieveAnalyst")
    .then(response => response.json())
    .then(data => this.setState({
      data: data
    }))
    .catch(error => console.error(error))      
  }

  render() {
    return (
      <DetailViewForm
        saveAnalyst={this.saveAnalyst}
        handleChange={this.handleChange}
        state={this.state}
      />
    );
  }
}
export default AnalystTeam;
