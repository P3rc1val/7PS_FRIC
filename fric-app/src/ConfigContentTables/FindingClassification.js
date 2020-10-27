import React, { Component } from "react";
import styled, { css } from "styled-components";
import Table from "react-bootstrap/Table";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import "../App.css";

const FindingClassification = () => {
  return (
    <rect3>
      <h3>Finding Classification</h3>

      <rect6>
        <FindingClassificationTable>
          <Table striped bordered hover variant="light" size="sm" responsive>
            <thead>
              <tr>
                <th>Select</th>
                <th>Finding Classification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="ch1" />
                </td>
                <td>Vulnerability</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch1" />
                </td>
                <td>Information</td>
              </tr>
            </tbody>
          </Table>
        </FindingClassificationTable>
      </rect6>
    </rect3>
  );
};

const FindingClassificationTable = styled.span`
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
`;
export default FindingClassification;
