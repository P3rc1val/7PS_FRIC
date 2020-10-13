import React, { Component } from "react";
import styled, { css } from "styled-components";
import Table from "react-bootstrap/Table";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import "../App.css";

const SeverityCatagoryCode = () => {
  return (
    <rect3>
      <h3>Severity Category Code Table</h3>

      <rect6>
        <SeverityCategoryCodeTable>
          <Table striped bordered hover variant="light" size="sm" responsive>
            <thead>
              <tr>
                <th scope="col">Select</th>
                <th scope="col">Severity Category Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="ch1" />
                </td>
                <td>I</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch2" />
                </td>
                <td>II</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="ch3" />
                </td>
                <td>III</td>
              </tr>
            </tbody>
          </Table>
        </SeverityCategoryCodeTable>
      </rect6>
    </rect3>
  );
};

const SeverityCategoryCodeTable = styled.span`
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
`;
export default SeverityCatagoryCode;
