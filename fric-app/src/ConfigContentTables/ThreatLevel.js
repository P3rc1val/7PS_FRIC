import React, { Component } from "react";
import styled, { css } from "styled-components";
import Table from "react-bootstrap/Table";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import "../App.css";

const ThreatLevel = () => {
  return (
    <rect3>
      <h3>Threat Level Table</h3>

      <rect6>
        <ThreatLevelTable>
          <Table striped bordered hover variant="light" size="sm" responsive>
            <thead>
              <tr>
                <th scope="col">Select</th>
                <th scope="col">Relevance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="ch1" />
                </td>
                <td>Confirmed</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch2" />
                </td>
                <td>Expected</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="ch3" />
                </td>
                <td>Anticipated</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="ch4" />
                </td>
                <td>Predicted</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="ch5" />
                </td>
                <td>Possible</td>
              </tr>
            </tbody>
          </Table>
        </ThreatLevelTable>
      </rect6>
    </rect3>
  );
};

const ThreatLevelTable = styled.span`
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
`;
export default ThreatLevel;
