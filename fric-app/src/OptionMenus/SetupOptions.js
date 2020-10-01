import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
const SystemDetails = () => {
  return (
    <Rect5>
      <h3>System Options</h3>
      <OptionsRow>
        <button>
          <Archive>Archive</Archive>
        </button>
        <button>
          <Save>Save</Save>
        </button>
        <button label="Delete">
          <Delete>Delete</Delete>
        </button>
      </OptionsRow>
    </Rect5>
  );
};
const OptionsRow = styled.div`
  height: 59px;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  margin-top: 50px;
  margin-left: 31px;
  margin-right: 53px;
`;

const Archive = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 78px;
  height: 59px;
`;
const Save = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 78px;
  height: 59px;
`;

const Delete = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 78px;
  height: 59px;
`;

const Rect5 = styled.div`
  width: 446px;
  height: 193px;
  background-color: #e6e6e6;
  border-radius: 2px;
  flex-direction: column;
  display: flex;
  margin-top: 30px;
  margin-left: -1px;
  padding: 16px;
`;

export default SystemDetails;
