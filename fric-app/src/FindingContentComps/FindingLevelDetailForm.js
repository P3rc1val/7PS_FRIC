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

export function FindingLevelDetailForm(props) {
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
                Finding System Level Impact
                </Typography>

                <TextField
                size="small"
                inputProps={{ style: { fontSize: 14 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                required
                name="confidentialityimpact"
                onChange={handleChange}
                id="filled-read-only-input"
                label="Confidentiality Finding Impact on System"
                defaultValue=""
                variant="filled"
                />

                <TextField
                size="small"
                inputProps={{ style: { fontSize: 14 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                required
                name="Integrityimpact"
                onChange={handleChange}
                id="filled-read-only-input"
                label="Integrity Finding Impact on System"
                defaultValue=""
                variant="filled"
                />

                <TextField
                size="small"
                inputProps={{ style: { fontSize: 14 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                required
                name="availability"
                onChange={handleChange}
                id="filled-read-only-input"
                label= "Availability Finding Impact on System"
                defaultValue=""
                variant="filled"
                />

                <TextField
                size="small"
                inputProps={{ style: { fontSize: 14 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                required
                name="score"
                onChange={handleChange}
                id="filled-read-only-input"
                label="Impact Score"
                defaultValue=""
                variant="filled"
                />
            </form>
          </findingContent>
        </rect7>
      </rect4>
    </ThemeProvider>
  );
}
export default FindingLevelDetailForm;
