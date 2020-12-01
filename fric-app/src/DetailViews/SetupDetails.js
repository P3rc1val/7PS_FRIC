import React, { Component } from "react";
import styled, { css } from "styled-components";
//import "../App.css";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import SetupViewForm from "../DetailViews/SetupDetailForm";

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

class SetupDetails extends Component  {
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
    const {handleINC,handleIPC,handleLSC,initState} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <div style = {{padding:"40px", }}>
        <Typography variant="h3">
            Finding and Reporting Information Console
          </Typography>
          <div style = {{padding:"40px", }}>
          <Typography variant="h4" color="secondary">
                There is no existing event in your local system
              </Typography>
            
            <SetupViewForm
            handleINC = {this.props.handleINC}
            //handleLSC = {this.props.handleLSC}
            handleIPC = {this.props.handleIPC}
            handleSubmit = {this.props.handleSubmit}
            state = {this.props.state}
            //loginStateProps={this.props.loginStateProps}
            />
          </div>
          
        </div>
      </ThemeProvider>
    );
  }
}




  

const radioboxes = styled.div``;

export default SetupDetails;