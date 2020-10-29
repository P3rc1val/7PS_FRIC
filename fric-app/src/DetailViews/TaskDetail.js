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


class TaskDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:"",
      description:"",
      priority:"",
      progress:"",
      duedate:"",
      associationTask:"",
      analyst:"",
      collaborators:"",
      system:"",
      numberSubtasks:"",
      numberFindings:""
    }
    this.handleChange = this.handleChange.bind(this);
    this.createTask = this.createTask.bind(this);
  }
  async createTask(task) {
    task.preventDefault();
    await fetch("http://localhost:8080/createTask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    });
    console.log(this.state);
  }

  handleChange(task) {
    const target = task.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render(){
    return (
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
    );
  };
}




export default TaskDetails;
=======
  return (
    <ThemeProvider theme={theme}>
      <rect4>
        <rect7>
          <taskDetailView>
            <Typography variant="h5" color="secondary">
            Task Detailed View
            </Typography>
            <form
            
              className={classes.root}
              noValidate
              autoComplete="off"
              method="POST"
              onSubmit={saveEvent}
            >
              <div>

                

                <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  required
                  name="title"
                  onChange={handleChange}
                  id="filled-read-only-input"
                  label="Title"
                  defaultValue=""
                  variant="filled"
                />

                <TextField
                  id="outlined-multiline-static"
                  label="Description"
                  name="description"
                  multiline
                  rows={4}
                  defaultValue=""
                  variant="filled"
                />
                
                <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  name="systemSelect"
                  onChange={handleChange}
                  id="systemSelect"
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
                  name="prioritySelect"
                  onChange={handleChange}
                  id="prioritySelect"
                  select
                  label="Priority"
                  className={classes.textField}
                  margin="normal"
                  variant="filled"
                ></TextField>

                <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  name="progressSelect"
                  onChange={handleChange}
                  id="progressSelect"
                  select
                  label="Progress"
                  className={classes.textField}
                  margin="normal"
                  variant="filled"
                ></TextField>

                <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  name="dueDate"
                  onChange={handleChange}
                  id="date"
                  label="Due Date"
                  type="date"
                  defaultValue="2017-05-24"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                />
                <Button variant="outlined" color="primary">
                  Submit
                </Button>
                
                <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  name="analystMSelect"
                  onChange={handleChange}
                  id="select"
                  select
                  label="Analyst(s)"
                  className={classes.textField}
                  margin="normal"
                  variant="filled"
                ></TextField>

                <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  name="prioritySelect"
                  onChange={handleChange}
                  id="prioritySelect"
                  select
                  label="Collaborator(s)"
                  className={classes.textField}
                  margin="normal"
                  variant="filled"
                ></TextField>

                <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 14 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                  name="progressSelect"
                  onChange={handleChange}
                  id="progressSelect"
                  select
                  label="Related Task(s)"
                  className={classes.textField}
                  margin="normal"
                  variant="filled"
                ></TextField>

                <Typography variant="h6" color="secondary">
                Select files:
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
                <Button variant="outlined" color="primary">
                  Submit
                </Button>
              </div>
            </form>
          </taskDetailView>
        </rect7>
      </rect4>
    </ThemeProvider>
  );
}
export default TaskDetailViewForm;

