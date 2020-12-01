import React, { Component, useState } from "react";
import styled, { css } from "styled-components";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";

import SetupDetails from "../DetailViews/SetupDetails.js";
import FricMenu from "../OptionMenus/FricMenuBackup.js";
import { AvEqualizer } from "material-ui/svg-icons";
//import { render } from "@testing-library/react";

class InitialView extends Component{
  constructor(props) {
    super(props);
    this.state = {
    initials : "",
    ip :"",
    loginState: false,
    localEventUp: false,
    };
    this.handleINC = this.handleINC.bind(this);
    //this.handleLSC = this.handleINC.bind(this);
    this.handleIPC = this.handleIPC.bind(this);
    this.handleSubmit =  this.handleSubmit.bind(this);
  }
  //onChange(inits, ips, loginStates){
    //this.setState({initials:inits, ip:ips, loginState:loginStates})
  //}
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
    
      return(
        loginState ?
   

    <body>
      <mainwindow>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <menuOptions>
          <FricMenu />
          <eventTable />
        </menuOptions>
      </mainwindow>
    </body>
    :
    <div>
          <SetupDetails 
          handleINC = {this.handleINC}
          handleLSC = {this.handleLSC}
          handleIPC = {this.handleIPC}
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
