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

  render(){
    return (


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

export function FindingDetails(props) {
//const FindingDetails = () => {
  const classes = useStyles();
  const [eclass, setClass] = React.useState("");
  const { handleChange } = props;
  const { saveEvent } = props;
  return (
    <ThemeProvider theme={theme}>

      <rect4>
        
        <rect7>
          <scrollContainers>
            <FindingDetailView style={{ overflow: "scroll" }}>
            <Typography variant="h5" color="secondary">
            Finding Detailed View
            </Typography>
              <form
                className={classes.root}
                noValidate
                autoComplete="off"
                method="POST"
                onSubmit={saveEvent}
              >
                
              <TextField
                    id="outlined-multiline-static"
                    label="Finding Information"
                    name="finformation"
                    multiline
                    rows={4}
                    defaultValue=""
                    variant="filled"
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="Finding Impact"
                    name="impact"
                    multiline
                    rows={4}
                    defaultValue=""
                    variant="filled"
                  />
                  <br></br>
                  <TextField
                    id="outlined-multiline-static"
                    label="Analyst Information"
                    name="analystinfo"
                    multiline
                    rows={4}
                    defaultValue=""
                    variant="filled"
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="Mitigation"
                    name="mitigation"
                    multiline
                    rows={4}
                    defaultValue=""
                    variant="filled"
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="Threat"
                    name="threat"
                    multiline
                    rows={4}
                    defaultValue=""
                    variant="filled"
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="Countermeasure"
                    name="countermeasure"
                    multiline
                    rows={4}
                    defaultValue=""
                    variant="filled"
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="Impact"
                    name="impact"
                    multiline
                    rows={4}
                    defaultValue=""
                    variant="filled"
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="Severity"
                    name="severity"
                    multiline
                    rows={4}
                    defaultValue=""
                    variant="filled"
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="Risk"
                    name="risk"
                    multiline
                    rows={4}
                    defaultValue=""
                    variant="filled"
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="Finding System Level Impact"
                    name="levelimpact"
                    multiline
                    rows={4}
                    defaultValue=""
                    variant="filled"
                  />
              </form>
            </FindingDetailView>
          </scrollContainers>
        </rect7>


        <rect8>
          <overview2Stack>
            <FindingInformation style={{ overflow: "scroll" }}>
            <Typography variant="h5" color="secondary">
            Finding Information
            </Typography>
              <form
                className={classes.root}
                noValidate
                autoComplete="off"
                method="POST"
                onSubmit={saveEvent}
              >
              <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  name="title"
                  onChange={handleChange}
                  id="filled-read-only-input"
                  label="ID:"
                  defaultValue=""
                  variant="filled"
                />

                <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  name="title"
                  onChange={handleChange}
                  id="filled-read-only-input"
                  label="Host Name:"
                  defaultValue=""
                  variant="filled"
                />
                <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  name="title"
                  onChange={handleChange}
                  id="filled-read-only-input"
                  label="IP Port:"
                  defaultValue=""
                  variant="filled"
                />
                <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  name="title"
                  onChange={handleChange}
                  id="filled-read-only-input"
                  label="Description:"
                  defaultValue=""
                  variant="filled"
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Long Description:"
                    name="impact"
                    multiline
                    rows={4}
                    defaultValue=""
                    variant="filled"
                  />
                <FormControl className="">
                  <NativeSelect
                    className=""
                    value=""
                    name="age"
                    onChange={handleChange}
                    inputProps=""
                  >
                    <option value="" >
                      Placeholder
                    </option>
                    <option value="" >
                      Placeholder
                    </option>
                  </NativeSelect>
                  <FormHelperText>Status</FormHelperText>
                </FormControl>
                <FormControl className="">
                  <NativeSelect
                    className=""
                    value=""
                    name=""
                    onChange={handleChange}
                    inputProps=""
                  >
                    <option value="" >
                                     
                    </option>
                    <option value="" >
                      Credential Complexity
                    </option>
                    <option value="" >
                      Manufacturer Default Credentials
                    </option>
                    <option value="" >
                      Lack of Authentication
                    </option>
                    <option value="" >
                      Plain Text Protocols
                    </option>
                    <option value="" >
                      Plain Text Web-Logon
                    </option>
                    <option value="" >
                      Encryption
                    </option>
                    <option value="" >
                      Authentication Bypass
                    </option>
                    <option value="" >
                      Port Security
                    </option>
                    <option value="" >
                      Access Control
                    </option><option value="" >
                      Least Privilege
                    </option><option value="" >
                      Privilege Escalation
                    </option>
                    <option value="" >
                      Missing Patches
                    </option>
                    <option value="" >
                      Physical Security
                    </option>
                  </NativeSelect>
                  <FormHelperText>Type</FormHelperText>
                </FormControl>
                
                <FormControl className="">
                  <NativeSelect
                    className=""
                    value=""
                    name=""
                    onChange={handleChange}
                    inputProps=""
                  >
                    <option value="" >
                      
                    </option>
                    <option value="" >
                      Placeholder
                    </option>
                  </NativeSelect>
                  <FormHelperText>Classification</FormHelperText>
                </FormControl>
                <Typography variant="h6" color="secondary">
                Evidence:
                </Typography>
                
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<AttachFileIcon />}
                >
                  Upload
                </Button>

                <br></br>
                <br></br>
                <FormControl className="">
                <InputLabel id="system">System</InputLabel>
                  <NativeSelect
                    className=""
                    value=""
                    name=""
                    onChange={handleChange}
                    inputProps=""
                  >
                    <option value="" >
                                       
                    </option>
                    <option value="" >
                      System 1
                    </option>
                  </NativeSelect>
                  
                </FormControl>
                <br></br><br></br>
                <Typography variant="body1" color ="secondary">
                  OR
                </Typography>
                
                <FormControl className="">
                <InputLabel id="task">Task</InputLabel>
                  <NativeSelect
                    className=""
                    value=""
                    name=""
                    onChange={handleChange}
                    inputProps=""
                  >
                    <option value="" >
                                      
                    </option>
                    <option value="" >
                      Task 1
                    </option>
                  </NativeSelect>
                  
                  
                </FormControl>
                <br></br><br></br>
                <Typography variant="body1" color ="secondary">
                  OR
                  </Typography>
                  
                <FormControl className="">
                <InputLabel id="subtask">Subtask   </InputLabel>
                  <NativeSelect
                    className=""
                    value=""
                    name=""
                    onChange={handleChange}
                    inputProps=""
                  >
                    <option value="" >
                          
                    </option>
                    <option value="" >
                      Subtask 1
                    </option>
                  </NativeSelect>
                  
                </FormControl>
                <br></br>
                <FormControl className="">
                <InputLabel id="rfinding">Related Findings:</InputLabel>
                  <NativeSelect
                    className=""
                    value=""
                    name=""
                    multiple
                    onChange={handleChange}
                    inputProps=""
                  >
                    <option value="" ></option>
                    <option value="">
                    Related Finding(s)             
                    </option>
                    <option value="">
                    Finding 1           
                    </option>
                  </NativeSelect>
                  
                </FormControl>
                <br></br><br></br>
                
              </form>

            </FindingInformation>
          </overview2Stack>
        </rect8>
      </rect4>


      </ThemeProvider>
  );

};

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
export default FindingDetails;
