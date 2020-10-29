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
  const [eclass, setClass] = React.useState("");

  //   const handleChange = (event) => {
  //     setClass(event.target.value);
  //   };
  const { handleChange } = props;
  const { createSystem } = props;

  return (
    <ThemeProvider theme={theme}>

          <setupInformation>
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
              <TextField id="initial" label="Please Enter Your Initials" variant="filled" />
                <Typography variant="h5" color="secondary">
                Please Select an Option
                </Typography>

                <FormControl component="fieldset">
                    
                    <RadioGroup defaultValue="create" aria-label="gender" name="customized-radios">
                        <FormControlLabel value="create" control={<Radio color="primary" />} label="Create a new event. Any existing event will be archived." />
                        <FormControlLabel id = "firstSync" value="first" control={<Radio color="primary" />} label="First time sync with Lead Analyst. Please enter the lead analysts IP:" 
                            
                        />
                        <TextField id="firstSync" label="Lead Analyst IP" variant="filled" />
                    </RadioGroup>
                </FormControl>
            </form>
          </setupInformation>

    </ThemeProvider>
  );
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

export default SetupViewForm;
