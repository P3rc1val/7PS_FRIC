import React, { Component } from "react";
import styled, { css } from "styled-components";
import Table from "react-bootstrap/Table";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";

const RiskMatrixReportTemplate = () => {
  return (
    <Rect3>
      <h3>Risk Matrix Template</h3>

      <Rect6>
        <TemplateTable>
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
        </TemplateTable>
      </Rect6>
    </Rect3>
  );
};
const ERBReportTemplate = () => {
  return (
    <Rect3>
      <h3>Finding Overview Table</h3>

      <Rect6>
        <TemplateTable>
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
        </TemplateTable>
      </Rect6>
    </Rect3>
  );
};
const FinalTechnicalReportTemplate = () => {
  return (
    <Rect3>
      <h3>Finding Overview Table</h3>

      <Rect6>
        <TemplateTable>
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
        </TemplateTable>
      </Rect6>
    </Rect3>
  );
};
const Rect3 = styled.div`
  width: 100%;
  height: 489px;
  background-color: #e6e6e6;
  border-radius: 2px;
  flex-direction: column;
  display: flex;
  padding: 16px;
`;

const Rect6 = styled.div`
  width: 100%;
  height: 260px;
  background-color: rgba(155, 155, 155, 1);
  flex-direction: column;
  display: flex;
  margin-top: 1px;
  padding: 16;
`;
const TemplateTable = styled.span`
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
`;
export default {
  RiskMatrixReportTemplate,
  ERBReportTemplate,
  FinalTechnicalReportTemplate,
};
