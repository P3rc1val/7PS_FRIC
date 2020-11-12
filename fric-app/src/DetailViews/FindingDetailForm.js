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
import SystemOptions from "../OptionMenus/SystemOptions.js";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
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

export function FindingDetailForm(props) {
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
          <systemInformation>
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
              <Typography variant="h6" color="secondary">
                Finding 
              </Typography>
              <Box component="span" m={1} color="primary">
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
              {/* <SystemOptions /> */}
              <div>
                <TextField
                  size="small"
                  required
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  //value={props.systemName}
                  name="systemName"
                  onChange={handleChange}
                  id="filled-read-only-input"
                  label="ID"
                  defaultValue=""
                  variant="filled"
                  //className="form-control"
                />
                <TextField
                  size="small"
                  required
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  //value={props.state.systemDescription}
                  name="systemDescription"
                  onChange={handleChange}
                  id="filled-read-only-input"
                  label="Host Name"
                  defaultValue=""
                  variant="filled"
                  //className="form-control"
                />
                <TextField
                  size="small"
                  required
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  //value={props.systemLocations}
                  name="systemLocation"
                  onChange={handleChange}
                  id="filled-read-only-input"
                  label="IP Port"
                  defaultValue=""
                  variant="filled"
                  //className="form-control"
                />
                <TextField
                  size="small"
                  required
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  //value={props.systemRouter}
                  name="systemRouter"
                  onChange={handleChange}
                  id="filled-read-only-input"
                  label="Description"
                  defaultValue=""
                  variant="filled"
                  //className="form-control"
                />
                <TextField
                  size="small"
                  required
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  //value={props.systemSwitch}
                  name="systemSwitch"
                  onChange={handleChange}
                  id="filled-read-only-input"
                  label="Long Description"
                  defaultValue=""
                  variant="filled"
                  //className="form-control"
                />
                <br></br>
                <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  name="eClass"
                  onChange={handleChange}
                  id="filled-select-currency-native"
                  select
                  label="Status"
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
                <br></br>
                <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  name="eClass"
                  onChange={handleChange}
                  id="filled-select-currency-native"
                  select
                  label="Type"
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
                <br></br>
                <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  name="eClass"
                  onChange={handleChange}
                  id="filled-select-currency-native"
                  select
                  label="Classification"
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
                <br></br>
                <Button
                  variant="contained"
                  color="default"
                  className=""
                  startIcon={<CloudUploadIcon />}
                >
                Evidence
                </Button>
                <br></br>
                <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  name="eClass"
                  onChange={handleChange}
                  id="filled-select-currency-native"
                  select
                  label="System"
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
                <br></br>
                <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  name="eClass"
                  onChange={handleChange}
                  id="filled-select-currency-native"
                  select
                  label="Task"
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
                <br></br>
                <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  name="eClass"
                  onChange={handleChange}
                  id="filled-select-currency-native"
                  select
                  label="Subtask"
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
                
              </div>
            </form>
          </systemInformation>
        </rect7>
      </rect4>
    </ThemeProvider>
  );
}
export default FindingDetailForm;
