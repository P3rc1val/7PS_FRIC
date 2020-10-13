import React, { Component } from "react";
import styled, { css } from "styled-components";
import Table from "react-bootstrap/Table";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import "../App.css";

const EventType = () => {
  return (
    <rect3>
      <h3>Event Type Table</h3>

      <rect6>
        <EventTypeTable>
          <Table striped bordered hover variant="light" size="sm" responsive>
            <thead>
              <tr>
                <th>Select</th>
                <th>Event Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="ch1" />
                </td>
                <td>Cooperative Vulnerability Penetration Assessment (CVPA)</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch2" />
                </td>
                <td>Cooperative Vulnerability Investigation (CVI)</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch3" />
                </td>
                <td>Verification of Fixes (VOF)</td>
              </tr>
            </tbody>
          </Table>
        </EventTypeTable>
      </rect6>
    </rect3>
  );
};

const EventTypeTable = styled.span`
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
`;
export default EventType;
