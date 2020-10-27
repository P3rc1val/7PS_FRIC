import React, { Component } from "react";
import styled, { css } from "styled-components";
import Table from "react-bootstrap/Table";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import "../App.css";

const CounterMeasure = () => {
  return (
    <rect3>
      <h3>Countermeasure</h3>

      <rect6>
        <Countermeasure>
          <Table striped bordered hover variant="light" size="sm" responsive>
            <thead>
              <tr>
                <th>Select</th>
                <th>Effectiveness Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="ch1" />
                </td>
                <td>Very High (10)</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="ch2" />
                </td>
                <td>High (7-9)</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch3" />
                </td>
                <td>Moderate (4-6) </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch4" />
                </td>
                <td>Low (1-3)</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="ch5" />
                </td>
                <td>Very Low (0)</td>
              </tr>
            </tbody>
          </Table>
        </Countermeasure>
      </rect6>
    </rect3>
  );
};

const Countermeasure = styled.span`
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
`;
export default CounterMeasure;
