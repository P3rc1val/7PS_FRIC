import React, { Component } from "react";
import styled, { css } from "styled-components";
import Table from "react-bootstrap/Table";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";

const FindingType = () => {
  return (
    
    <Rect3>
      <h3>Finding Table</h3>

      <Rect6>
        <FindingTable>
          <Table striped bordered hover variant="light" size="sm" responsive>
            <thead>
              <tr>
                <th>Select</th>
                <th>Finding Type</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="ch1" />
                </td>
                <td>Credentials</td>

              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="ch2" />
                </td>
                <td>Complexity</td>
                
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch3" />
                </td>
                <td>Manufaacturer Default</td>
                
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch4" />
                </td>
                <td>Creds</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="ch5" />
                </td>
                <td>Lack of Authentication</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="ch6" />
                </td>
                <td>Plain Text Protocols</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="ch7" />
                </td>
                <td>Plain Text Web Login</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="ch8" />
                </td>
                <td>Encryption</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="ch9" />
                </td>
                <td>Authentication Bypass</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="ch10" />
                </td>
                <td>Port Security</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="ch11" />
                </td>
                <td>Access Control</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="ch12" />
                </td>
                <td>Least Privilege</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="ch13" />
                </td>
                <td>Privilege Escalation</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="ch14" />
                </td>
                <td>Missing Patches</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="ch15" />
                </td>
                <td>Physical Security</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="ch16" />
                </td>
                <td>Information Disclosure</td>
              </tr>

            </tbody>
          </Table>
        </FindingTable>
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
const FindingTable = styled.span`
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
`;
export default FindingType;
