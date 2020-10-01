import React, { Component } from "react";
import styled, { css } from "styled-components";
import Table from "react-bootstrap/Table";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";

const Impact = () => {
  return (
    <Rect3>
      <h3>Impact Table</h3>

      <Rect6>
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
const ImpactTable = styled.span`

  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
`;
export default Impact;
