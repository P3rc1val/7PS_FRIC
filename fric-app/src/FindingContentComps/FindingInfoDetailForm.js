import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import SystemOptions from "../OptionMenus/SystemOptions.js";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Box from "@material-ui/core/Box";
import AttachFileIcon from '@material-ui/icons/AttachFile';
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
  input: {
    display: 'none',
    },
}));

export function FindingInfoForm(props) {
  const classes = useStyles();
  const [eclass, setClass] = React.useState("");

  //   const handleChange = (event) => {
  //     setClass(event.target.value);
  //   };
  const { handleChange } = props;
  const { createSystem } = props;

  return (
    <ThemeProvider theme={theme}>
      <rect4>
        <rect7>
          <findingContent>
            <form>
            <Typography variant="h5" color="secondary">
                Finding Information
                </Typography>

                <TextField
                size="small"
                inputProps={{ style: { fontSize: 14 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                required
                name="findingid"
                onChange={handleChange}
                id="filled-read-only-input"
                label="ID"
                defaultValue=""
                variant="filled"
                />

                <TextField
                size="small"
                inputProps={{ style: { fontSize: 14 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                required
                name="findinghostname"
                onChange={handleChange}
                id="filled-read-only-input"
                label="Host Name"
                defaultValue=""
                variant="filled"
                />

                <TextField
                size="small"
                inputProps={{ style: { fontSize: 14 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                required
                name="findingipport"
                onChange={handleChange}
                id="filled-read-only-input"
                label="IP Port"
                defaultValue=""
                variant="filled"
                />

                <TextField
                size="small"
                inputProps={{ style: { fontSize: 14 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                required
                name="findingdesc"
                onChange={handleChange}
                id="filled-read-only-input"
                label="Description"
                defaultValue=""
                variant="filled"
                />

                <TextField
                size="small"
                inputProps={{ style: { fontSize: 14 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                required
                name="findingldesc"
                onChange={handleChange}
                id="filled-read-only-input"
                label="Long Description"
                defaultValue=""
                variant="filled"
                />

                <TextField
                size="small"
                inputProps={{ style: { fontSize: 14 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                name="findingstatus"
                onChange={handleChange}
                id="systemSelect"
                select
                label="Status"
                className={classes.textField}
                margin="normal"
                variant="filled"
                ></TextField>

                <TextField
                size="small"
                inputProps={{ style: { fontSize: 14 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                name="findingtyps"
                onChange={handleChange}
                id="findingType"
                select
                label="Type"
                className={classes.textField}
                margin="normal"
                variant="filled"
                ></TextField>

                <TextField
                size="small"
                inputProps={{ style: { fontSize: 14 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                name="classification"
                onChange={handleChange}
                id="findingClass"
                select
                label="Classification"
                className={classes.textField}
                margin="normal"
                variant="filled"
                ></TextField>

                <input
                accept="file/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                />
                <label htmlFor="contained-button-file"></label>
                <Button variant="contained"
                color="primary"
                component="span"
                startIcon={<AttachFileIcon />}
                >
                Evidence
                </Button>

                <TextField
                size="small"
                inputProps={{ style: { fontSize: 14 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                name="findingsystem"
                onChange={handleChange}
                id="findingSystem"
                select
                label="System"
                className={classes.textField}
                margin="normal"
                variant="filled"
                ></TextField>

                <TextField
                size="small"
                inputProps={{ style: { fontSize: 14 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                name="findingtask"
                onChange={handleChange}
                id="findingTask"
                select
                label="Task"
                className={classes.textField}
                margin="normal"
                variant="filled"
                ></TextField>

                <TextField
                size="small"
                inputProps={{ style: { fontSize: 14 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                name="findingsubtask"
                onChange={handleChange}
                id="findingSubtask"
                select
                label="Subtask"
                className={classes.textField}
                margin="normal"
                variant="filled"
                ></TextField>

                <TextField
                size="small"
                inputProps={{ style: { fontSize: 14 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                name="findingrelated"
                onChange={handleChange}
                id="findingRelated"
                select
                label="Related Finding(s)"
                className={classes.textField}
                margin="normal"
                variant="filled"
                ></TextField>
            </form>
          </findingContent>
        </rect7>
      </rect4>
    </ThemeProvider>
  );
}
export default FindingInfoForm;
