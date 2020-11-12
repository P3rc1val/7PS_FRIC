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
  export function TaskDetailViewForm(props) {
	const classes = useStyles();
	const [eclass, setClass] = React.useState("");
  
	//   const handleChange = (event) => {
	//     setClass(event.target.value);
	//   };
	const { handleChange } = props;
	const { saveEvent } = props;
 
	return(
		<ThemeProvider theme={theme}>
		<rect4>
		  <titles>
			<h3>Task Detail View</h3>
		  </titles>
		  <rect7>
			<scrollContainers>
			  <detailView style={{ overflow: "scroll" }}>
				<label for="w3review">Title</label>
				<form action="/action_page.php">
				  <textarea
					id="w3review"
					name="w3review"
					rows="4"
					cols="50"
				  ></textarea>
				</form>
				<label for="w3review">Description</label>
				<form action="/action_page.php">
				  <textarea
					id="w3review"
					name="w3review"
					rows="4"
					cols="50"
				  ></textarea>
				</form>
  
				<label>System</label>
  
				<select id="myList">
				  <option value="1">Select</option>
				</select>
  
				<label>Priority</label>
  
				<select id="myList">
				  <option value="1">Select</option>
				</select>
  
				<label>Progress</label>
  
				<select id="myList">
				  <option value="1">Select</option>
				</select>
  
				<form action="/action_page.php">
				  <label for="due date">Due Date:</label>
  
				  <input type="date" id="due date" name="due date"></input>
				  <input type="submit"></input>
				</form>
  
				<label>Analyst(s)</label>
  
				<select name="skills" multiple="" class="ui fluid dropdown">
				  <option value="">Lorem Ipsum</option>
				  <option value="angular">Lorem Ipsum</option>
				  <option value="css">Lorem Ipsum</option>
				  <option value="design">Lorem Ipsum</option>
				  <option value="ember">Lorem Ipsum</option>
				  <option value="html">Lorem Ipsum</option>
				</select>
  
				<label>Collaborator(s)</label>
  
				<select name="skills" multiple="" class="ui fluid dropdown">
				  <option value="">Lorem Ipsum</option>
				  <option value="angular">Lorem Ipsumr</option>
				  <option value="css">Lorem Ipsum</option>
				  <option value="design">Lorem Ipsum</option>
				  <option value="ember">Lorem Ipsum</option>
				  <option value="html">Lorem Ipsum</option>
				</select>
  
				<label>Related Task(s)</label>
  
				<select name="skills" multiple="" class="ui fluid dropdown">
				  <option value="">Lorem Ipsum</option>
				  <option value="angular">Lorem Ipsum</option>
				  <option value="css">Lorem Ipsum</option>
				  <option value="design">Lorem Ipsum</option>
				  <option value="ember">Lorem Ipsum</option>
				  <option value="html">Lorem Ipsum</option>
				</select>
  
				<form action="/action_page.php">
				  <label for="myfile">Select files:</label>
				  <input type="file" id="myfile" name="myfile" multiple></input>
				  <input type="submit"></input>
				</form>
			  </detailView>
			</scrollContainers>
		  </rect7>
		</rect4>
		</ThemeProvider>
	  );
	}
  export default TaskDetailViewForm;