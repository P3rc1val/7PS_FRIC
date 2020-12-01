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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from "@material-ui/core/Button";
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

export function SetupViewForm(props) {
  const classes = useStyles();
  const { createSystem  } = props;
  
  return (
    <ThemeProvider theme={theme}>
          <setupInformation >
            <form
              className={classes.root}
              noValidate
              autoComplete="off"
              method="POST"
              onSubmit={createSystem}
            >
              {/* <button type="submit" name="save">
                Save
              </button> */}
              <br></br>
              <TextField name = 'initials' id="initial" label="Please Enter Your Initials" variant="filled"  value={props.state.initials} onChange={props.handleINC}/>
                <Typography variant="h5" color="secondary">
                Please Select an Option
                </Typography>
                

                <FormControl component="fieldset">
                    
                    <RadioGroup defaultValue="create" aria-label="gender" name="customized-radios">
                        <FormControlLabel value="create" control={<Radio color="primary" />} label="Create a new event. Any existing event will be archived." />
                        <FormControlLabel id = "firstSync" value="first" control={<Radio color="primary" />} label="First time sync with Lead Analyst. Please enter the lead analysts IP:" />
                        <TextField name = 'ip' id="firstSync" label="Lead Analyst IP" value = {props.state.ip} variant="filled" onChange = {props.handleIPC}/>
                    </RadioGroup>
                    <Button
                  variant="contained"
                  color="primary"
                  onClick={props.handleSubmit}

                  
                >
                  Submit
                </Button>
                </FormControl>
            </form>
          </setupInformation>

    </ThemeProvider>
  );
}


export default SetupViewForm;
