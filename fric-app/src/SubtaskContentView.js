import React, { Component } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

class SubtaskContentView extends Component {
  render() {
    return (
      <Container>
        <RectRow>
          <Rect3Column>
            <Rect3>
              <h3>Subtask Overview Table</h3>

              <Rect6>
                <SubtaskOverviewTable>
                  <Table striped bordered hover variant="light">
                    <thead>
                      <tr>
                        <th>Select</th>
                        <th>Title</th>
                        <th>Task</th>
                        <th>Analyst</th>
                        <th>Progress</th>
                        <th>No. of Findings</th>
                        <th>Due Date</th>
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
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                </SubtaskOverviewTable>
              </Rect6>
            </Rect3>
            <Rect5>
              <h3>Subtask Options</h3>
              <OptionsRow>
                <button>
                  <Archive>Archive</Archive>
                </button>
                <button>
                  <Promote>Promote</Promote>
                </button>
                <button label="Save">
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
              <h3>Subtask Detail View</h3>
            </titles>
            <Rect7>
              <scrollContainers>
                <SubtaskDetailView style={{ overflow: "scroll" }}>
                  <h1>Subask Detailed View</h1>
                  <form action="/action_page.php">
                    <label for="w3review">Title</label>
                    <textarea
                      id="w3review"
                      name="w3review"
                      rows="4"
                      cols="50"
                    ></textarea>
                  </form>
                  <form action="/action_page.php">
                    <label for="w3review">Description</label>
                    <textarea
                      id="w3review"
                      name="w3review"
                      rows="4"
                      cols="50"
                    ></textarea>
                  </form>

                  <label>Progress</label>

                  <select id="myList">
                    <option value="1">Select</option>
                  </select>

                  <form action="/action_page.php">
                    <label for="due date">Due Date:</label>

                    <input type="date" id="due date" name="due date"></input>
                    <input type="submit"></input>
                  </form>

                  <label>Analyst(s)</label>

                  <select name="skills" multiple="" class="ui fluid dropdown">
                    <option value="">Lorem Ipsum</option>
                    <option value="angular">Lorem Ipsum</option>
                    <option value="css">Lorem Ipsum</option>
                    <option value="design">Lorem Ipsum</option>
                    <option value="ember">Lorem Ipsum</option>
                    <option value="html">Lorem Ipsum</option>
                  </select>

                  <label>Collaborator(s)</label>

                  <select name="skills" multiple="" class="ui fluid dropdown">
                    <option value="">Lorem Ipsum</option>
                    <option value="angular">Lorem Ipsumr</option>
                    <option value="css">Lorem Ipsum</option>
                    <option value="design">Lorem Ipsum</option>
                    <option value="ember">Lorem Ipsum</option>
                    <option value="html">Lorem Ipsum</option>
                  </select>

                  <label>Task(s)</label>

                  <select name="skills" multiple="" class="ui fluid dropdown">
                    <option value="">Lorem Ipsum</option>
                    <option value="angular">Lorem Ipsum</option>
                    <option value="css">Lorem Ipsum</option>
                    <option value="design">Lorem Ipsum</option>
                    <option value="ember">Lorem Ipsum</option>
                    <option value="html">Lorem Ipsum</option>
                  </select>

                  <label>Subtask(s)</label>

                  <select name="skills" multiple="" class="ui fluid dropdown">
                    <option value="">Lorem Ipsum</option>
                    <option value="angular">Lorem Ipsum</option>
                    <option value="css">Lorem Ipsum</option>
                    <option value="design">Lorem Ipsum</option>
                    <option value="ember">Lorem Ipsum</option>
                    <option value="html">Lorem Ipsum</option>
                  </select>

                  <form action="/action_page.php">
                    <label for="myfile">Select files:</label>
                    <input
                      type="file"
                      id="myfile"
                      name="myfile"
                      multiple
                    ></input>
                    <input type="submit"></input>
                  </form>
                </SubtaskDetailView>
              </scrollContainers>
            </Rect7>
          </Rect4>
        </RectRow>
      </Container>
    );
  }
}
const SubtaskOverviewTable = styled.span`
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
`;

const Archive = styled.span`
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 78px;
  height: 59px;
`;
const Promote = styled.span`
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 78px;
  height: 59px;
`;

const Save = styled.span`
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 78px;
  height: 59px;
`;

const Cancel = styled.span`
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 78px;
  height: 59px;
`;

const SubtaskDetailView = styled.span`
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
  height: 610px;
  overflow: hidden;
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
  height: 421px;
  background-color: rgba(155, 155, 155, 1);
  flex-direction: column;
  display: flex;
  margin-top: 1px;
  padding: 16;
`;

const Rect5 = styled.div`
  width: 100%;
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
  width: 750px;
  flex-direction: column;
  display: flex;
  margin-left: 19px;
  margin-top: 28px;
  margin-bottom: 28px;
`;

const Rect4 = styled.div`
  width: 436px;
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
  width: 400px;
  height: 645px;
  background-color: rgba(155, 155, 155, 1);
  flex-direction: column;
  display: flex;
  margin-top: 3px;

  margin-right: 16px;
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

export default SubtaskContentView;
