import React, { Component } from "react";
import { Button } from "react-bootstrap";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

//import { render } from "@testing-library/react";

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async saveEvent(event) {
    event.preventDefault();
    await fetch("http://localhost:8080/createEvent", {
      methof: "POST",
      headers: { "Conternt-Type": "application/json" },
      body: JSON.stringify(this.state),
    });
  }
  render() {
    return (
      <div className="Login">
        <form>
          <formGroup controlId="email" bsSize="large">
            <controlLabel>Initials</controlLabel>
            <formControl
              autoFocus
              type="Credentials"
              value={this.state.Initials}
              onChange={this.handleChange}
              name="Initials"
              placeholder="JD"
            />
          </formGroup>
          <formGroup controlId="password" bsSize="large">
            <controlLabel>Password</controlLabel>
            <formControl type="password" />
          </formGroup>
          <Button block bsSize="large" type="submit">
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export default LoginView;
