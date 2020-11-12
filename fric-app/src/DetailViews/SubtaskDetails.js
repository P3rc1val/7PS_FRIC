import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import SystemDetails from "./SystemDetails";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Select from '@material-ui/core/Select';
import SubtaskDetailViewForm from "./SubtaskDetailViewForm.js"

class SubtaskDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:"",
      task:"",
      analyst:"",
      progress:"",
      numberFindings:"",
      duedate:"",
    };
    this.handleChange = this.handleChange.bind(this);
    this.createSubtask = this.createSubtask.bind(this);
  }

  async createSubtask(subtask) {
    subtask.preventDefault();
    await fetch("http://localhost:8080/createSubtask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    });
    console.log(this.state);
  }

  handleChange(subtask) {
    const target = subtask.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <SubtaskDetailViewForm
        createSubtask={this.createSubtask}
        handleChange={this.handleChange}
        state={this.state}
      />
    );
  }
}


export default SubtaskDetails
