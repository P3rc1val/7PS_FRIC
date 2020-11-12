import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskDetailViewForm from "./TaskDetailViewForm.js"

class TaskDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      taskName:"",
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
      <TaskDetailViewForm
        createTask={this.createTask}
        handleChange={this.handleChange}
        state={this.state}
      />
    )
  };
}

export default TaskDetailViewForm;



// export default TaskDetails;
// =======
//   return (
//     <ThemeProvider theme={theme}>
//       <rect4>
//         <rect7>
//           <taskDetailView>
//             <Typography variant="h5" color="secondary">
//             Task Detailed View
//             </Typography>
//             <form
            
//               className={classes.root}
//               noValidate
//               autoComplete="off"
//               method="POST"
//               onSubmit={saveEvent}
//             >
//               <div>

                

//                 <TextField
//                   size="small"
//                   inputProps={{ style: { fontSize: 14 } }} // font size of input text
//                   InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
//                   required
//                   name="title"
//                   onChange={handleChange}
//                   id="filled-read-only-input"
//                   label="Title"
//                   defaultValue=""
//                   variant="filled"
//                 />

//                 <TextField
//                   id="outlined-multiline-static"
//                   label="Description"
//                   name="description"
//                   multiline
//                   rows={4}
//                   defaultValue=""
//                   variant="filled"
//                 />
                
//                 <TextField
//                   size="small"
//                   inputProps={{ style: { fontSize: 14 } }} // font size of input text
//                   InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
//                   name="systemSelect"
//                   onChange={handleChange}
//                   id="systemSelect"
//                   select
//                   label="System"
//                   className={classes.textField}
//                   margin="normal"
//                   variant="filled"
//                 ></TextField>

//                 <TextField
//                   size="small"
//                   inputProps={{ style: { fontSize: 14 } }} // font size of input text
//                   InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
//                   name="prioritySelect"
//                   onChange={handleChange}
//                   id="prioritySelect"
//                   select
//                   label="Priority"
//                   className={classes.textField}
//                   margin="normal"
//                   variant="filled"
//                 ></TextField>

//                 <TextField
//                   size="small"
//                   inputProps={{ style: { fontSize: 14 } }} // font size of input text
//                   InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
//                   name="progressSelect"
//                   onChange={handleChange}
//                   id="progressSelect"
//                   select
//                   label="Progress"
//                   className={classes.textField}
//                   margin="normal"
//                   variant="filled"
//                 ></TextField>

//                 <TextField
//                   size="small"
//                   inputProps={{ style: { fontSize: 14 } }} // font size of input text
//                   InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
//                   name="dueDate"
//                   onChange={handleChange}
//                   id="date"
//                   label="Due Date"
//                   type="date"
//                   defaultValue="2017-05-24"
//                   className={classes.textField}
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                   variant="filled"
//                 />
//                 <Button variant="outlined" color="primary">
//                   Submit
//                 </Button>
                
//                 <TextField
//                   size="small"
//                   inputProps={{ style: { fontSize: 14 } }} // font size of input text
//                   InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
//                   name="analystMSelect"
//                   onChange={handleChange}
//                   id="select"
//                   select
//                   label="Analyst(s)"
//                   className={classes.textField}
//                   margin="normal"
//                   variant="filled"
//                 ></TextField>

//                 <TextField
//                   size="small"
//                   inputProps={{ style: { fontSize: 14 } }} // font size of input text
//                   InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
//                   name="prioritySelect"
//                   onChange={handleChange}
//                   id="prioritySelect"
//                   select
//                   label="Collaborator(s)"
//                   className={classes.textField}
//                   margin="normal"
//                   variant="filled"
//                 ></TextField>

//                 <TextField
//                   size="small"
//                   inputProps={{ style: { fontSize: 14 } }} // font size of input text
//                   InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
//                   name="progressSelect"
//                   onChange={handleChange}
//                   id="progressSelect"
//                   select
//                   label="Related Task(s)"
//                   className={classes.textField}
//                   margin="normal"
//                   variant="filled"
//                 ></TextField>

//                 <Typography variant="h6" color="secondary">
//                 Select files:
//                 </Typography>
                
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   className={classes.button}
//                   startIcon={<AttachFileIcon />}
//                 >
//                   Upload
//                 </Button>
//                 <br></br>
//                 <br></br>
//                 <Button variant="outlined" color="primary">
//                   Submit
//                 </Button>
//               </div>
//             </form>
//           </taskDetailView>
//         </rect7>
//       </rect4>
//     </ThemeProvider>
//   );
// }
// export default TaskDetailViewForm;