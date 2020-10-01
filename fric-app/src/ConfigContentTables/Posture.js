import React, { Component } from "react";
import styled, { css } from "styled-components";
import Table from "react-bootstrap/Table";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";

const Posture = () => {
  return (
    <Rect3>
      <h3>Posture Table</h3>
      <Rect6>
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
const PostureTable = styled.span`
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
`;
export default Posture;
