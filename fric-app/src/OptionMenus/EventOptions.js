import React, { Component } from "react";
import styled, { css } from "styled-components";
import Table from "react-bootstrap/Table";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import "../App.css";
const EventOptions = () => {
  return (
    <Box component="span" m={1}>
      <h3>Event Options</h3>
      <ButtonGroup aria-label="outlined default button group">
        <Button>Archive</Button>
        <Button type="submit" name="save">
          Save
        </Button>
        <Button>Cancel</Button>
      </ButtonGroup>
    </Box>
  );
};

export default EventOptions;
