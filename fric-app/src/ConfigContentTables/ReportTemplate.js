import React, { Component } from "react";
import styled, { css } from "styled-components";
import Table from "react-bootstrap/Table";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import "../App.css";

const RiskMatrixReportTemplate = () => {
  return (
    <rect3>
      <h3>Risk Matrix Template</h3>

      <rect6>
        <templateTable>
          <Table striped bordered hover variant="light" size="sm" responsive>
            <thead>
              <tr>
                <th>Select</th>
                <th>Finding</th>
                <th>SystemCategorization</th>
                <th>Event Name</th>
                <th>Event Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="ch1" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </templateTable>
      </rect6>
    </rect3>
  );
};
const ERBReportTemplate = () => {
  return (
    <rect3>
      <h3>Finding Overview Table</h3>

      <rect6>
        <templateTable>
          <Table striped bordered hover variant="light" size="sm" responsive>
            <thead>
              <tr>
                <th>Select</th>
                <th>Lead Analyst</th>
                <th>Event Name</th>
                <th>Event Type</th>
                <th>Summary Table</th>
                <th>Finding</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="ch1" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </templateTable>
      </rect6>
    </rect3>
  );
};
const FinalTechnicalReportTemplate = () => {
  return (
    <rect3>
      <h3>Finding Overview Table</h3>

      <rect6>
        <templateTable>
          <Table striped bordered hover variant="light" size="sm" responsive>
            <thead>
              <tr>
                <th>Select</th>
                <th>Analyst Name</th>
                <th>Summary Table</th>
                <th>Finding</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="ch1" />
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </templateTable>
      </rect6>
    </rect3>
  );
};

export default {
  RiskMatrixReportTemplate,
  ERBReportTemplate,
  FinalTechnicalReportTemplate,
};
