import React, { Component, useState } from "react";
import styled, { css } from "styled-components";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";

import SetupDetails from "../DetailViews/SetupDetails.js";
import FricMenu from "../OptionMenus/FricMenuBackup.js";
import { AvEqualizer } from "material-ui/svg-icons";
import EventDetails from "../DetailViews/EventDetails.js";
import AnalystTeam from "../DetailViews/AnalystTeam.js";
//import { render } from "@testing-library/react";

class InitialView extends Component{
  constructor(props) {
    super(props);
    this.state = {
    initials : "",
    ip :"",
    loginState: false,
    localEventUP:null,
    };
    this.handleINC = this.handleINC.bind(this);
    //this.handleLSC = this.handleINC.bind(this);
    this.handleIPC = this.handleIPC.bind(this);
    this.handleSubmit =  this.handleSubmit.bind(this);
    this.handleEUS =  this.handleEUS.bind(this);

  }
  //onChange(inits, ips, loginStates){
    //this.setState({initials:inits, ip:ips, loginState:loginStates})
  //}
  handleEUS(e){
    const target = e.target;
    const value = e.target.value;
    this.setState({
        localEventUP: value
    });
};
  handleINC (e){
    const target = e.target;
    const value = e.target.value;
    this.setState({
        initials: value
    });
};

  handleIPC(e){
    const target = e.target;
    const value = e.target.value;
    this.setState({
        ip: value
    });
};
  handleSubmit(e){
    const target =e.target;
    const value = e.target.value;
    this.setState({loginState:true});
    e.preventDefault()
  }
render(){
  const loginState = this.state.loginState;
  const localEventUP =  this.state.localEventUP;
    return(
      loginState ?
        localEventUP ? 
        //fetch Event Data
        <body>
          <mainwindow>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            <menuOptions>
              <FricMenu 
              state = {this.state}
              />
            </menuOptions>
          </mainwindow>
        </body> 
        :
        //Archive any current Event create new one.
        <body>
          <mainwindow >
            <link
              //rel="stylesheet"
              //href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            <div style = {{flexDirection:"row"}}>
            <div>
            <EventDetails
              state = {this.state}
            />
            </div>
            <div>
            <AnalystTeam
              state = {this.state}
            />
            </div>
            </div>
          </mainwindow>
        </body>
      :
      <div>
          <SetupDetails 
          handleINC = {this.handleINC}
          handleLSC = {this.handleLSC}
          handleIPC = {this.handleIPC}
          handleEUS = {this.handleEUS}
          handleSubmit = {this.handleSubmit}
          state= {this.state}
          //loginStateProps = {this.state}
          />
        </div>
    );
  }
}
render(<InitialView />, document.getElementById("root"));
export default InitialView;
