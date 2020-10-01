import React, { Component } from "react";
import styled, { css } from "styled-components";
import Table from "react-bootstrap/Table";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";

const ThreatLevel = () => {
  return (
    <Rect3>
      <h3>Threat Level Table</h3>

      <Rect6>
        <ThreatLevelTable>
          <Table striped bordered hover variant="light" size="sm" responsive>
            <thead>
            <tr>
              <th scope="col">Select</th>
              <th scope="col">Relevance</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                <input type="checkbox" name="ch1" />
                </td>
                <td>Confirmed</td>
                
              </tr>
              <tr>
                <td>
                <input type="checkbox" name="ch2" />
                </td>
                <td>Expected</td>
              </tr>

              <tr>
                <td>
                <input type="checkbox" name="ch3" />
                </td>
                <td>Anticipated</td>
                </tr>

                <tr>
                <td>
                <input type="checkbox" name="ch4" />
                </td>
                <td>Predicted</td>
                </tr>

                <tr>
                <td>
                <input type="checkbox" name="ch5" />
                </td>
                <td>Possible</td>
                </tr>

                
            </tbody>
          </Table>
        </ThreatLevelTable>
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
const ThreatLevelTable = styled.span`
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
`;
export default ThreatLevel;
