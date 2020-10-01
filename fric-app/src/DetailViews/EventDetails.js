import React, { Component } from "react";
import styled, { css } from "styled-components";

class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      eventDescription: "",
      eventType: "",
      eventVersion: "",
      eventAssesment: "",
      assesmentDate: "",
      orgName: "",
      SCTG: "",
      eClass: "",
      dDate: "",
      cName: "",
      initial: "",
      myList: "",
    };
  }
  async saveEvent(event) {
    event.preventDefault();
    await fetch("http://localhost:8080/createEvent", {
      methof: "POST",
      headers: { "Conternt-Type": "application/json" },
      body: JSON.stringify(this.state),
    });
  }
  render() {
    return (
      <Rect4>
        <titles>
          <h3>Event Detail View</h3>
        </titles>
        <Rect7>
          <scrollContainers>
            <EventDetailView style={{ overflow: "scroll" }}>
              <form>
              <Save>Save</Save><button name="save" onClick={() => this.saveEvent(this.state)}>
                  Save
                </button>
                <label for="eventName">Event Name</label>

                <input
                  value={this.state.eventName}
                  onChange={this.handleChange}
                  type="text"
                  name="eventName"
                  placeholder="Name of Event"
                  className="form-control"
                ></input>

                <label for="eventDescription">Event Description</label>

                <textarea
                  value={this.state.eventDescription}
                  onChange={this.handleChange}
                  type="text"
                  name="eventDescription"
                  placeholder="Description of Event"
                  className="form-control"
                  cols="50"
                  rows="20"
                  style={{ height: "28px" }}
                >
                  This is a Description of an Event.
                </textarea>

                <label for="eventType">Event Type</label>
                <select
                  value={this.state.eventType}
                  onChange={this.handleChange}
                  name="eventType"
                >
                  <option value="type1">Type1</option>
                  <option value="type2">Type2</option>
                  <option value="type3">Type3</option>
                  <option value="type4">Type4</option>
                </select>

                <label for="eventVersion">Event Version </label>
                <input
                  type="text"
                  value={this.state.eventVersion}
                  onChange={this.handleChange}
                  name="eventVersion"
                  placeholder="1.0"
                ></input>

                <label for="assesmentDate">Assesment Date</label>

                <input
                  type="date"
                  name="assesmentDate"
                  value={this.state.eventAssesment}
                  onChange={this.handleChange}
                ></input>

                <label for="orgName">Organization Name</label>

                <input
                  name="orgName"
                  value={this.state.orgName}
                  onChange={this.handleChange}
                  placeholder="Name of Organization"
                ></input>

                <label for="SCTG">Security Classification Title Guide</label>
                <input
                  type="text"
                  value={this.state.SCTG}
                  onChange={this.handleChange}
                  name="SCTG"
                  placeholder="Title Guide"
                ></input>

                <label for="eClass">Event Classification</label>
                <select
                  name="eClass"
                  value={this.state.eClass}
                  onChange={this.handleChange}
                >
                  <option value="Class1">Class1</option>
                  <option value="Class2">Class2</option>
                  <option value="Class3">Class3</option>
                  <option value="Class4">Class4</option>
                </select>

                <label for="dDate">Declassification Date</label>

                <input
                  value={this.state.dDate}
                  onChange={this.handleChange}
                  type="date"
                  name="dDate"
                ></input>

                <label for="cName">Customer Name</label>

                <input
                  type="text"
                  value={this.state.cName}
                  onChange={this.handleChange}
                  name="cName"
                  placeholder="John Doe"
                ></input>
              </form>
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
                      <select
                        name="myList"
                        value={this.state.myList}
                        onChange={this.handleChange}
                      >
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
                          value={this.state.initial}
                          onChange={this.handleChange}
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
    );
  }
}

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

const Save = styled.div`
  margin: 15px;
`;

export default EventDetails;
