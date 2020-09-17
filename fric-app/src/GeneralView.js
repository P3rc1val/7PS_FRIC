import React, { Component } from "react";
import styled, { css } from "styled-components";
class GeneralView extends Component {
  render() {
    return (
      <RectRow>
        <ContextViewContainer>
          <ContextView>
            <table>
              <tr>
                <th>Select</th>
                <th>Event name</th>
                <th>No. of Systems</th>
                <th>No. of Findings</th>
                <th>Progress</th>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch1" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch2" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch3" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch4" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="ch5" />
                </td>
              </tr>
            </table>
          </ContextView>
        </ContextViewContainer>
        <Rect2Column>
          <EventTreeContainer>
            <EventTree>
              <ul id="myUL">
                <li>
                  <span class="caret">Event</span>
                  <ul class="nested">
                    <li>
                      <span class="caret">System 1</span>
                      <ul class="nested">
                        <li>
                          <span class="caret">Task 1</span>
                          <ul class="nested">
                            <li>
                              <span class="caret">Subtask 1</span>
                              <ul class="nested">
                                <li>Finding 1</li>
                                <li>Finding 2</li>
                              </ul>
                            </li>
                            <li>Subtask 2</li>
                          </ul>
                        </li>
                        <li>
                          <span class="caret">Task 2</span>
                          <ul class="nested">
                            <li>Finding 3</li>
                            <li>Finding 4</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>System 2 </li>
                  </ul>
                </li>
              </ul>
            </EventTree>
          </EventTreeContainer>
          <SearchBoxContainer>
            <SearchBox>Search Box</SearchBox>
          </SearchBoxContainer>
        </Rect2Column>
      </RectRow>
    );
  }
}
const Container = styled.div`
  display: flex;
  border-width: 1px;
  border-color: #000000;
  flex-direction: row;
  border-style: solid;
`;

const ContextViewContainer = styled.div`
  width: 485px;
  height: 719px;
  background-color: #e6e6e6;
  border-radius: 2px;
  flex-direction: column;
  display: flex;
  margin-left: 26px;
  margin-top: 23px;
`;

const ContextView = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 20px;
  margin-left: 27px;
`;

const EventTreeContainer = styled.div`
  width: 684px;
  height: 397px;
  background-color: #e6e6e6;
  border-radius: 2px;
  flex-direction: column;
  display: flex;
`;

const EventTree = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 23px;
  margin-left: 26px;
`;

const SearchBoxContainer = styled.div`
  width: 684px;
  height: 291px;
  background-color: #e6e6e6;
  border-radius: 2px;
  flex-direction: column;
  display: flex;
  margin-top: 31px;
`;

const SearchBox = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 25px;
  margin-left: 34px;
`;

const Rect2Column = styled.div`
  width: 684px;
  flex-direction: column;
  display: flex;
  margin-left: 33px;
  margin-top: 23px;
  margin-bottom: 26px;
`;

const RectRow = styled.div`
  height: 768px;
  flex-direction: row;
  display: flex;
  margin-right: 34px;
`;

export default GeneralView;
