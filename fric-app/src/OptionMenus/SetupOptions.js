import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
const SystemDetails = () => {
  return (
    <rect5>
      <h3>System Options</h3>
      <optionsRow>
        <button>
          <Archive>Archive</Archive>
        </button>
        <button>
          <Save>Save</Save>
        </button>
        <button label="Delete">
          <Delete>Delete</Delete>
        </button>
      </optionsRow>
    </rect5>
  );
};

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

export default SystemDetails;
