import React, { Component } from "react";
class System{
	constructor(props) {
		super(props);
		this.state  ={
			systemName:"",
    		numberTasks:"",
    		numberFindings:"",
			progress:0,
			archive:false,
			id:""
		}
	}
}
export default System;