import React, { Component } from "react";
import styled, { css } from "styled-components";
import Table from "react-bootstrap/Table";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import "../App.css";

const FindingTable = () => {
  return (
    <rect3>
      <h3>Finding Overview Table</h3>

      <rect6>
        <overviewTable>
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
        </overviewTable>
      </rect6>
    </rect3>
  );
};

export default FindingTable;
