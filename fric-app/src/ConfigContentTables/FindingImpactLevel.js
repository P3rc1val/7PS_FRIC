import React, { Component } from "react";
import styled, { css } from "styled-components";
import Table from "react-bootstrap/Table";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import "../App.css";

const FindingImpactLevel = () => {
  return (
    <rect3>
      <h3>Finding Overview Table</h3>

      <rect6>
        <FindingOverviewTable>
          <Table striped bordered hover variant="light" size="sm" responsive>
            <thead>
              <tr>
                <th>Select</th>
                <th>Confidentiality</th>
                <th>Integrity</th>
                <th>Availability</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="ch1" />
                </td>
                <td>Low</td>
                <td>Medium</td>
                <td>High</td>
                <td>Information</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch1" />
                </td>
                <td>Low</td>
                <td>Medium</td>
                <td>High</td>
                <td>Information</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch1" />
                </td>
                <td>Low</td>
                <td>Medium</td>
                <td>High</td>
                <td>Information</td>
              </tr>
            </tbody>
          </Table>
        </FindingOverviewTable>
      </rect6>
    </rect3>
  );
};

const FindingOverviewTable = styled.span`
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
`;
export default FindingImpactLevel;
