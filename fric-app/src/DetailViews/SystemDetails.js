import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import SystemDetailViewForm from "./SystemDetailViewForm.js";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#7fcd91",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#8fcd91",
    },
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      label: {
        // Some CSS
        align: "left",
      },
    },
  },
});

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
