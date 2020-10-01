import React, { Component } from "react";
import styled, { css } from "styled-components";
import Table from "react-bootstrap/Table";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";

const FindingImpactLevel = () => {
  return (
    <Rect3>
      <h3>Finding Overview Table</h3>

      <Rect6>
        <FindingOverviewTable>
          <Table striped bordered hover variant="light" size="sm" responsive>
            <thead>
              <tr>
                <th>Select</th>
                <th>ID</th>
                <th>Title</th>
                <th>System</th>
                <th>Task</th>
                <th>Finding</th>
                <th>Analyst</th>
                <th>Status</th>
                <th>Classification</th>
                <th>Type</th>
                <th>Risk</th>
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
                <td></td>
                <td></td>
                <td></td>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch2" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch3" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch4" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <th></th>
                <th></th>
              </tr>
            </tbody>
          </Table>
        </FindingOverviewTable>
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
const FindingOverviewTable = styled.span`
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
`;
export default FindingImpactLevel;
