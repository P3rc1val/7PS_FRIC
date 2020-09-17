import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

class SystemContentView extends Component {
  render() {
    return (
      <Container>
        <RectRow>
          <Rect3Column>
            <Rect3>
              <h3>System Overview Table</h3>

              <Rect6>
                <SystemOverviewTable>
                  <Table striped bordered hover variant="light">
                    <thead>
                      <tr>
                        <th>Select</th>
                        <th>System</th>
                        <th>No. of Tasks</th>
                        <th>No. of Findings</th>
                        <th>Progress</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input type="checkbox" name="ch1" />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox" name="ch2" />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox" name="ch3" />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox" name="ch4" />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox" name="ch5" />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                </SystemOverviewTable>
              </Rect6>
            </Rect3>
            <Rect5>
              <h3>System Options</h3>
              <OptionsRow>
                <button>
                  <Archive>Archive</Archive>
                </button>
                <button>
                  <Save>Save</Save>
                </button>
                <button label="Delete">
                  <Delete>Delete</Delete>
                </button>
              </OptionsRow>
            </Rect5>
          </Rect3Column>
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
        </RectRow>
      </Container>
    );
  }
}
const SystemOverviewTable = styled.span`
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
`;

const Archive = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 78px;
  height: 59px;
`;
const Save = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 78px;
  height: 59px;
`;

const Delete = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 78px;
  height: 59px;
`;

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

//---------------------------------------------------------------------------
const scrollContainers = styled.span`
  padding-right: 20px;
`;
const titles = styled.div`
  margin-left: 20px;
  margin-top: 10px;
`;

const td = styled.div`
  text-align: center;
`;

const Container = styled.div`
  display: flex;

  flex-direction: column;

  float: right;
`;

const Rect3 = styled.div`
  width: 446px;
  height: 489px;
  background-color: #e6e6e6;
  border-radius: 2px;
  flex-direction: column;
  display: flex;
  padding: 16px;
`;

const Rect6 = styled.div`
  width: 416px;
  height: 421px;
  background-color: rgba(155, 155, 155, 1);
  flex-direction: column;
  display: flex;
  margin-top: 1px;
  padding: 16;
`;

const Rect5 = styled.div`
  width: 446px;
  height: 193px;
  background-color: #e6e6e6;
  border-radius: 2px;
  flex-direction: column;
  display: flex;
  margin-top: 30px;
  margin-left: -1px;
  padding: 16px;
`;

const OptionsRow = styled.div`
  height: 59px;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  margin-top: 50px;
  margin-left: 31px;
  margin-right: 53px;
`;

const Rect3Column = styled.div`
  width: 446px;
  flex-direction: column;
  display: flex;
  margin-left: 19px;
  margin-top: 28px;
  margin-bottom: 28px;
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

const RectRow = styled.div`
  height: 768px;
  flex-direction: row;
  display: flex;
  margin-right: 33px;
`;

export default SystemContentView;
