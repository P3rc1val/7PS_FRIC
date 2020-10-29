import React, { Component } from "react";
import styled, { css } from "styled-components";
import "../App.css";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import SetupViewForm from "./SetupDetailForm.js";

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

class SetupDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectnewEvent: "",
    };
  }
  async saveEvent(event) {
    event.preventDefault();
    await fetch("http://localhost:8080/createEvent", {
      methof: "POST",
      headers: { "Conternt-Type": "application/json" },
      body: JSON.stringify(this.state),
    });
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
        <Typography variant="h3" color="secondary">
                Setup Details
              </Typography>
          <Rect4>
          <Typography variant="h4" color="secondary">
                There is no existing event in your local system
              </Typography>
            <Rect7>
            <SetupViewForm
            createSystem={this.createSystem}
            handleChange={this.handleChange}
            state={this.state}
            />
            </Rect7>
          </Rect4>
        </div>
      </ThemeProvider>
    );
  }
}

const Rect4 = styled.div`
  width: 100%px;
  height: 711px;
  background-color: #e6e6e6;
  border-radius: 2px;
  flex-direction: column;
  display: flex;
  margin-left: 28px;
  margin-top: 28px;
  padding: 16px;
`;

const SetupDetailView = styled.span`
  display: flex;
  flex-direction: column;

  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin-top: 12px;
  margin-left: 12px;
  margin-right: 12px;
  overflow-x: hidden;
  margin: 12 px;
  height: 610px;
  overflow: hidden;
`;
const Rect7 = styled.div`
  width: 100%px;
  height: 500px;
  background-color: rgba(155, 155, 155, 1);
  flex-direction: column;
  display: flex;
  margin-top: 10px;

  margin-right: 5px;
`;
const radioboxes = styled.div``;

export default SetupDetails;
