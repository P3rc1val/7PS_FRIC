import React, { Component } from "react";
import styled, { css } from "styled-components";
import Table from "react-bootstrap/Table";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import "../App.css";

const Impact = () => {
  return (
    <rect3>
      <h3>Impact Table</h3>

      <rect6>
        <ImpactTable>
          <Table striped bordered hover variant="light" size="md" responsive>
            <thead>
              <tr>
                <th scope="col">Select</th>
                <th scope="col">Impact Level</th>
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
                =======
                <td>VH</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch2" />
                </td>
                <td>H</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="ch3" />
                </td>
                <td>M</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="ch4" />
                </td>
                <td>L</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="ch5" />
                </td>
                <td>VL</td>
              </tr>
            </tbody>
          </Table>
        </ImpactTable>
      </rect6>
    </rect3>
  );
};

const ImpactTable = styled.span`
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
`;
export default Impact;
