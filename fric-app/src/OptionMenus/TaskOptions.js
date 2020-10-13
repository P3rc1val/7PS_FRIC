import React, { Component } from "react";
import styled, { css } from "styled-components";
import Table from "react-bootstrap/Table";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import "../App.css";

const TaskOptions = () => {
  return (
    <rect5>
      <h3>Task Options</h3>
      <optionsRow>
        <button>
          <Archive>Archive</Archive>
        </button>
        <button>
          <Demote>Demote</Demote>
        </button>
        <button label="Save">
          <Save>Save</Save>
        </button>
        <button label="Cancel">
          <Cancel>Cancel</Cancel>
        </button>
      </optionsRow>
    </rect5>
  );
};

const Archive = styled.span`
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 78px;
  height: 59px;
`;
const Demote = styled.span`
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 78px;
  height: 59px;
`;

const Save = styled.span`
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 78px;
  height: 59px;
`;

const Cancel = styled.span`
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 78px;
  height: 59px;
`;

export default TaskOptions;
