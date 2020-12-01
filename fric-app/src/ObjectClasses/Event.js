import React, { Component } from "react";
class Event{
	constructor(props) {
		super(props);
		this.state  ={
			eventName:null,
			noOfSystems:null, 
			noOfFindings:null, 
			progress:null,
			archive:false,
			id:null
		}
	}
}
export default Event;