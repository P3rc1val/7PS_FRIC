import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
const SystemDetails = () => {
  return (
    <Rect4>
      <titles>
        <h3>System Detail View</h3>
      </titles>
      <Rect7>
        <scrollContainers>
          <SystemInformation style={{ overflow: "scroll" }}>
            <label for="eName">Event Name</label>

            <input
              type="text"
              id="eName"
              name="eName"
              placeholder="Name of Event"
            ></input>

            <label for="eName">Event Description</label>

            <textarea
              name="myTextBox"
              cols="50"
              rows="20"
              style={{ height: "28px" }}
            >
              This is a Description of an Event.
            </textarea>

            <label for="eType">Event Type</label>
            <select name="eType" id="eType">
              <option value="type1">Type1</option>
              <option value="type2">Type2</option>
              <option value="type3">Type3</option>
              <option value="type4">Type4</option>
            </select>

            <label for="eVers">Event Version </label>
            <input
              type="text"
              id="eVers"
              name="eVers"
              placeholder="1.0"
            ></input>

            <label for="aDate">Assesment Date</label>

            <input
              type="text"
              id="aDate"
              name="aDate"
              placeholder="01/01/2021"
            ></input>

            <label for="oName">Organization Name</label>

            <input
              type="text"
              id="oName"
              name="oName"
              placeholder="Name of Organization"
            ></input>

            <label for="SCTG">Security Classification Title Guide</label>
            <input
              type="text"
              id="SCTG"
              name="SCTG"
              placeholder="Title Guide"
            ></input>

            <label for="eClass">Event Classification</label>
            <select name="eClass" id="eClass">
              <option value="Class1">Class1</option>
              <option value="Class2">Class2</option>
              <option value="Class3">Class3</option>
              <option value="Class4">Class4</option>
            </select>

            <label for="dDate">Declassification Date</label>

            <input
              type="text"
              id="dDate"
              name="dDate"
              placeholder="02/01/2021"
            ></input>

            <label for="cName">Customer Name</label>

            <input
              type="text"
              id="cName"
              name="cName"
              placeholder="John Doe"
            ></input>
          </SystemInformation>
        </scrollContainers>
      </Rect7>
      <titles>
        <h3>System Categorization</h3>
      </titles>
      <Rect8>
        <Overview2Stack>
          <SystemCategorization>
            <table>
              <tr>
                <th>Confidentiality</th>
                <th>Integrity</th>
                <th>Availability</th>
              </tr>
              <tr>
                <td>
                  <select
                    name="Confidentiality"
                    id="confidentiality"
                    position="center"
                  >
                    <option value="H">H</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                </td>
                <td>
                  <select name="Integrity" id="integrity">
                    <option value="H">H</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                </td>
                <td>
                  <select name="Availability" id="availability">
                    <option value="H">H</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                </td>
              </tr>
            </table>
          </SystemCategorization>
        </Overview2Stack>
      </Rect8>
    </Rect4>
  );
};

const SystemInformation = styled.span`
  display: flex;
  flex-direction: column;

  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin-top: 12px;
  margin-left: 12px;
  margin-right: 12px;
  overflow-x: hidden;
  margin: 12 px;
  height: 300px;
  overflow: hidden;
`;

const Rect4 = styled.div`
  width: 736px;
  height: 711px;
  background-color: #e6e6e6;
  border-radius: 2px;
  flex-direction: column;
  display: flex;
  margin-left: 28px;
  margin-top: 28px;
  padding: 16px;
`;

const Rect7 = styled.div`
  width: 704px;
  height: 318px;
  background-color: rgba(155, 155, 155, 1);
  flex-direction: column;
  display: flex;
  margin-top: 3px;

  margin-right: 16px;
`;

const Rect8 = styled.div`
  width: 704px;
  height: 295px;
  background-color: rgba(155, 155, 155, 1);
  flex-direction: row;
  display: flex;
  margin-top: 16px;

  margin-bottom: 16px;
`;

const Overview2Stack = styled.div`
  width: 342px;
  height: 204px;
  margin-top: 20px;
  margin-left: 11px;
  position: relative;
`;

const SystemCategorization = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  padding-right: px;
  height: 272px;
  width: 400px;
`;
export default SystemDetails;
