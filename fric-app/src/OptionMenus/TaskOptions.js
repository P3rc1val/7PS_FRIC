import React, { Component } from "react";
import styled, { css } from "styled-components";
import Table from "react-bootstrap/Table";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";

const TaskOptions = () => {
  return (
    <Rect5>
      <h3>Task Options</h3>
      <OptionsRow>
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
      </OptionsRow>
    </Rect5>
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
const OptionsRow = styled.div`
  height: 59px;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  margin-top: 50px;
  margin-left: 31px;
  margin-right: 53px;
`;
const Rect5 = styled.div`
  width: 100%;
  height: 193px;
  background-color: #e6e6e6;
  border-radius: 2px;
  flex-direction: column;
  display: flex;
  margin-top: 30px;
  margin-left: -1px;
  padding: 16px;
`;

export default TaskOptions;
