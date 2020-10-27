import React, { Component } from "react";
import styled, { css } from "styled-components";
import Table from "react-bootstrap/Table";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import "../App.css";

const SubtaskOptions = () => {
  return (
    <rect5>
      <h3>Subtask Options</h3>
      <optionsRow>
        <button>
          <Archive>Archive</Archive>
        </button>
        <button>
          <Promote>Promote</Promote>
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
const Promote = styled.span`
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

export default SubtaskOptions;
