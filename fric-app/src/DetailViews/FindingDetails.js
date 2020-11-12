import React, { Component } from "react";
import styled, { css } from "styled-components";
import { titles } from "../App.css";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from "@material-ui/core/Button";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import FindingDetailForm from './FindingDetailForm.js'
import FindingDetail from './SetupDetailForm.js'


class FindingDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:"",
      host:"",
      ip:"",
      description:"",
      lDescription:"",
      status:"",
      type:"",
      classi:"",
      assoToFind:"",
      evidence:"",
      confidentiality:"",
      integrity:"",
      availability:"",
      analyst:"",
      collaborator:"",
      posture:"",
      sMitig:"",
      lMitig:"",
      relevance:"",
      counterEffect:"",
      impactDescription:"",
      impactLevel:"",
      sevCode:"",
      sevScore:"",
      vulSev:"",
      qVulSev:"",
      risk:"",
      likehood:"",
      confInSystem:"",
      integInSystem:"",
      avaiInSystem:"",
      impactScore:"",
      title:"",
      system:"",
      task:"",
      subtask:"",
      
    }
    this.handleChange = this.handleChange.bind(this);
    this.createFinding = this.createFinding.bind(this);
  }

  async createFinding(finding) {
    finding.preventDefault();
    await fetch("http://localhost:8080/createFinding", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    });
    console.log(this.state);
  }

  handleChange(finding) {
    const target = finding.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
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
            
            <FindingDetailForm
            createSystem={this.createSystem}
            handleChange={this.handleChange}
            state={this.state}
            />
            
          </Rect4>
        </div>
      </ThemeProvider>
    );
  }
}  

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

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
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
  },
}));



const FindingInformation = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);

  height: 50vh;
  width: 110%;
`;

const FindingDetailView = styled.span`
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
  height: 50vh;
  overflow: hidden;
`;

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

const Rect7 = styled.div`
  width: 100%px;
  height: 500px;
  background-color: rgba(155, 155, 155, 1);
  flex-direction: column;
  display: flex;
  margin-top: 10px;

  margin-right: 5px;
`;


export default FindingDetails;
