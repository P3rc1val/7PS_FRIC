import React, { Component } from "react";
import styled, { css } from "styled-components";
import Table from "react-bootstrap/Table";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import "../App.css";

const EventClassification = () => {
  return (
    <rect3>
      <h3>Event Classification Table</h3>

      <rect6>
        <EventClassTable>
          <Table striped bordered hover variant="light" size="sm" responsive>
            <thead>
              <tr>
                <th>Select</th>
                <th>Event Classification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="ch1" />
                </td>
                <td>Top Secret</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch2" />
                </td>
                <td>Secret</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch3" />
                </td>
                <td>Confidential</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch4" />
                </td>
                <td>Classified</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch4" />
                </td>
                <td>Unclassified</td>
              </tr>
            </tbody>
          </Table>
        </EventClassTable>
      </rect6>
    </rect3>
  );
};

const EventClassTable = styled.span`
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
`;
export default EventClassification;
