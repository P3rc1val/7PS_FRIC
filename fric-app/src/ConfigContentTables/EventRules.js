import React, { Component } from "react";
import styled, { css } from "styled-components";
import Table from "react-bootstrap/Table";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import "../App.css";

const EventRules = () => {
  return (
    <rect3>
      <h3>Event Rules Table</h3>

      <rect6>
        <EventRulesTable>Text of rules go here</EventRulesTable>
      </rect6>
    </rect3>
  );
};

const EventRulesTable = styled.span`
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
`;
export default EventRules;
