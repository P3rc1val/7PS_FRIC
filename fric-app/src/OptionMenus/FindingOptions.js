import React, { Component } from "react";
import styled, { css } from "styled-components";
import "../App.css";
const FindingOptions = () => {
  return (
    <rect5>
      <h3>Finding Options</h3>
      <optionsRow>
        <button>
          <Delete>Delete</Delete>
        </button>
        <button>
          <Save>Save</Save>
        </button>
        <button>
          <Cancel>Cancel</Cancel>
        </button>
      </optionsRow>
    </rect5>
  );
};

const Delete = styled.span`
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

const Cancel = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 78px;
  height: 59px;
`;
export default FindingOptions;
