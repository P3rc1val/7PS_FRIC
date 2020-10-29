import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import SystemDetailViewForm from "./SystemDetailViewForm.js";


class SystemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      systemName: "",
      systemDescription: "",
      systemLocations: "",
      systemRouter: "",
      systemSwitch: "",
      systemRoom: "",
      testPlan: "",
      confidentiality: "",
      integrity: "",
      availability: "",
      numberTasks: "0",
      progress: "0",
      numberFindings: "0"
    };
    this.handleChange = this.handleChange.bind(this);
    this.createSystem = this.createSystem.bind(this);
  }

  async createSystem(system) {
    system.preventDefault();
    await fetch("http://localhost:8080/createSystem", {
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

  render() {
    return (
      <SystemDetailViewForm
        createSystem={this.createSystem}
        handleChange={this.handleChange}
        state={this.state}
      />
    );
  }
}
export default SystemDetails;
