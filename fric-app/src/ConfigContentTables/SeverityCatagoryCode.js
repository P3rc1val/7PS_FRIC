import React, { Component } from "react";
import styled, { css } from "styled-components";
import Table from "react-bootstrap/Table";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";

const SeverityCatagoryCode = () => {
  return (
    <Rect3>
      <h3>Severity Category Code Table</h3>

      <Rect6>
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
const SeverityCategoryCodeTable = styled.span`
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
`;
export default SeverityCatagoryCode;
