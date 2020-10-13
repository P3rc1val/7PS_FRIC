import React, { Component } from "react";
import styled, { css } from "styled-components";
import Table from "react-bootstrap/Table";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import "../App.css";

const Posture = () => {
  return (
    <rect3>
      <h3>Posture Table</h3>
      <rect6>
        <PostureTable>
          <Table striped bordered hover variant="light" size="sm" responsive>
            <thead>
              <tr>
                <th>Select</th>
                <th>Posture</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="ch1" />
                </td>
                <td>Insider</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch2" />
                </td>
                <td>Insider-Nearsider</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch3" />
                </td>
                <td>Outsider</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch4" />
                </td>
                <td>Nearsider</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch5" />
                </td>
                <td>Nearsider-Outsider</td>
              </tr>
            </tbody>
          </Table>
        </PostureTable>
      </rect6>
    </rect3>
  );
};

const PostureTable = styled.span`
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
`;
export default Posture;
