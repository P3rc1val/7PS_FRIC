import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
//import "../App.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import SystemDetails from "./SystemDetails";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
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
      width: "50ch",
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

export function DetailViewForm(props) {
  const classes = useStyles();
  const [eclass, setClass] = React.useState("");

  //   const handleChange = (event) => {
  //     setClass(event.target.value);
  //   };
  const { handleChange } = props;
  const { saveEvent } = props;

  return (
    <ThemeProvider theme={theme}>
      <rect4>
        <rect7>
          <eventDetailView>
            <form
              className={classes.root}
              noValidate
              autoComplete="off"
              method="POST"
              onSubmit={saveEvent}
              style= {{width:"200px",padding:"30px"}}
            >
              {/* <button type="submit" name="save">
                Save
              </button> */}

              <Typography variant="h4" color="secondary" width="300px">
                Event Details
              </Typography>
              <Box component="span" m={1}>
                <ButtonGroup
                  aria-label="outlined default button group"
                  color="primary"
                >
                  <Button>Archive</Button>
                  <Button type="submit" name="save">
                    Save
                  </Button>
                  <Button>Cancel</Button>
                </ButtonGroup>
              </Box>
              <div style = {{'justify-content':'start', }}>
                <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  required
                  name="eventName"
                  onChange={handleChange}
                  id="filled-read-only-input"
                  label="Event Name"
                  defaultValue=""
                  variant="filled"
                />
                <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  required
                  name="eventDescription"
                  onChange={handleChange}
                  id="filled-read-only-input"
                  label="Event Description"
                  defaultValue=""
                  variant="filled"
                  multiline = 'true'
                />
                <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  required
                  name="eventType"
                  onChange={handleChange}
                  id="filled-read-only-input"
                  label="Event Type"
                  defaultValue=""
                  variant="filled"
                />
                <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  required
                  name="eventVersion"
                  onChange={handleChange}
                  id="filled-read-only-input"
                  label="Event Version"
                  defaultValue=""
                  variant="filled"
                />
                <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  name="assesmenDate"
                  onChange={handleChange}
                  id="date"
                  label="Assessment Date"
                  type="date"
                  defaultValue="2017-05-24"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                />

                <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  required
                  name="orgName"
                  onChange={handleChange}
                  id="filled-read-only-input"
                  label="Organization Name"
                  defaultValue=""
                  variant="filled"
                />
                <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  required
                  name="SCTG"
                  onChange={handleChange}
                  id="filled-read-only-input"
                  label="Security Classification Guide"
                  defaultValue=""
                  variant="filled"
                />
                <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  name="eClass"
                  onChange={handleChange}
                  id="filled-select-currency-native"
                  select
                  label="Event Classification"
                  className={classes.textField}
                  /*
              value={this.state.eclass}
              onChange={this.handleChange('currency')}
              */
                  SelectProps={{
                    native: true,
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  //helperText="Please select your currency"
                  margin="normal"
                  variant="filled"
                ></TextField>

                <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  name="dDate"
                  onChange={handleChange}
                  id="date"
                  label="Declassification Date"
                  type="date"
                  defaultValue="2017-05-24"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                />

                <TextField
                  size="small"
                  name="cName"
                  onChange={handleChange}
                  required
                  id="filled-read-only-input"
                  label="Customer Name"
                  defaultValue=""
                  variant="filled"
                />
              </div>
            </form>
          </eventDetailView>
        </rect7>
      </rect4>
    </ThemeProvider>
  );
}
export default DetailViewForm;
