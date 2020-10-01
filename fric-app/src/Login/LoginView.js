import React, { Component } from "react";
import { Button } from "react-bootstrap";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

//import { render } from "@testing-library/react";

class LoginView extends Component {
  render() {
    return (
      <div className="Login">
        <form>
          <formGroup controlId="email" bsSize="large">
            <controlLabel>Email</controlLabel>
            <formControl autoFocus type="Credentials" />
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
