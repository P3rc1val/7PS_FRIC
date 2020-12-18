import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import AttachFileIcon from '@material-ui/icons/AttachFile';
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
	input: {
		display: 'none',
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
						size="small"
						inputProps={{ style: { fontSize: 14 } }} // font size of input text
						InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
						required
						name="title"
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
					defaultValue="YYYY-MM-DD"
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
					name="analystMSelect"
					onChange={handleChange}
					id="select"
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
					name="analystMSelect"
					onChange={handleChange}
					id="select"
					select
					label="Related Task(s)"
					className={classes.textField}
					margin="normal"
					variant="filled"
				  	></TextField>

				<Typography variant="h6" color="secondary">
				  Select files:
				  </Typography>
					<input
					accept="file/*"
					className={classes.input}
					id="contained-button-file"
					multiple
					type="file"
					/>
					<label htmlFor="contained-button-file">
					<Button variant="contained" 
					color="primary" 
					component="span" 
					startIcon={<AttachFileIcon />}
					>
					Attachments
					</Button>
					</label>
				  	</div>
				</form>
			  </taskDetailView>
		  </rect7>
		</rect4>
		</ThemeProvider>
	  );
	}
  export default TaskDetailViewForm;