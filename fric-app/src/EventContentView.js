import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

class EventContentView extends Component {
  render() {
    return (
      <Container>
        <RectRow>
          <Rect3Column>
            <Rect3>
              <h3>Event Overview Table</h3>

              <Rect6>
                <EventOverviewTable>
                  <Table striped bordered hover variant="light">
                    <thead>
                      <tr>
                        <th>Select</th>
                        <th>Event name</th>
                        <th>No. of Systems</th>
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
                </EventOverviewTable>
              </Rect6>
            </Rect3>
            <Rect5>
              <h3>Event Options</h3>
              <OptionsRow>
                <button>
                  <Delete>Delete</Delete>
                </button>
                <button>
                  <Save>Save</Save>
                </button>
                <button label="Cancel">
                  <Cancel>Cancel</Cancel>
                </button>
              </OptionsRow>
            </Rect5>
          </Rect3Column>
          <Rect4>
            <titles>
              <h3>Event Detail View</h3>
            </titles>
            <Rect7>
              <scrollContainers>
                <EventDetailView style={{ overflow: "scroll" }}>
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
                </EventDetailView>
              </scrollContainers>
            </Rect7>
            <titles>
              <h3>Event Team Information</h3>
            </titles>
            <Rect8>
              <Overview2Stack>
                <EventTeamOverview>
                  <leadanalyst>
                    <button type="button">Add Lead Analyst</button>
                    <h4>Lead Analysts</h4>
                    <form>
                      <fieldset>
                        <p>
                          <select id="myList">
                            <option value="1">Select</option>
                            <option value="1">Remote</option>
                            <option value="2">Edit</option>
                            <option value="3">Sync</option>
                          </select>
                          <div>
                            <input
                              type="checkbox"
                              id="initial"
                              name="initial"
                            ></input>
                            <label for="initial">NR</label>
                          </div>

                          <div>
                            <input
                              type="checkbox"
                              id="initial"
                              name="initial"
                            ></input>
                            <label for="initial">VC</label>
                          </div>
                        </p>
                      </fieldset>
                    </form>
                  </leadanalyst>
                  <analyst>
                    <button type="button">Add Analyst</button>
                    <h4>Analysts</h4>
                    <form>
                      <fieldset>
                        <p>
                          <select id="myList">
                            <option value="1">Select</option>
                            <option value="1">Remote</option>
                            <option value="2">Edit</option>
                            <option value="3">Sync</option>
                          </select>
                          <div>
                            <input
                              type="checkbox"
                              id="initial"
                              name="initial"
                            ></input>
                            <label for="initial">JD</label>
                          </div>

                          <div>
                            <input
                              type="checkbox"
                              id="initial"
                              name="initial"
                            ></input>
                            <label for="initial">FG</label>
                          </div>
                          <div>
                            <input
                              type="checkbox"
                              id="initial"
                              name="initial"
                            ></input>
                            <label for="initial">NL</label>
                          </div>
                          <div>
                            <input
                              type="checkbox"
                              id="initial"
                              name="initial"
                            ></input>
                            <label for="initial">AV</label>
                          </div>
                        </p>
                      </fieldset>
                    </form>
                  </analyst>
                </EventTeamOverview>
              </Overview2Stack>
            </Rect8>
          </Rect4>
        </RectRow>
      </Container>
    );
  }
}
const EventOverviewTable = styled.span`
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
`;

const Delete = styled.span`
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

const Cancel = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 78px;
  height: 59px;
`;

const EventDetailView = styled.span`
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

const EventTeamOverview = styled.div`
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

export default EventContentView;
