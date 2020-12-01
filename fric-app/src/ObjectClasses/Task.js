import React, { Component } from "react";
class Task{
	constructor(props) {
		super(props);
		this.state  ={
			taskName:"",
    system:"",
    analyst:"",
    priority:"",
    progress:"",
    numberSubtasks:"",
    numberFindings:"",
	duedate:"",
	archive: false,
	id:""
		}
	}
}
export default Task;