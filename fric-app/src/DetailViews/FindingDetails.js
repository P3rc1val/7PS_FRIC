import React, { Component } from "react";
import styled, { css } from "styled-components";
import { titles } from "../App.css";

class FindingDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:"",
      description:"",
      priority:"",
      progress:"",
      duedate:"",
      associationTask:"",
      analysts:"",
      collaborators:"",

    }
    this.handleChange = this.handleChange.bind(this);
    this.createFinding = this.createFinding.bind(this);
  }

  async createFinding(finding) {
    system.preventDefault();
    await fetch("http://localhost:8080/createFinding", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    });
    console.log(this.state);
  }

  handleChange(finding) {
    const target = finding.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render(){
    return (
      <rect4>
        <titles>
          <h3>Finding Detail View</h3>
        </titles>
        <rect7>
          <scrollContainers>
            <FindingDetailView style={{ overflow: "scroll" }}>
              <form>
                <label for="Findinfo">Finding Information:</label>

                <textarea
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="50"
                ></textarea>
              </form>
              <form>
                <label for="FindImpact">Finding Impact:</label>

                <textarea id="FindImpact" name="FindImpact">
                  0
                </textarea>

                <label for="analyst">Analyst Information:</label>
                <textarea id="analyst" name="Analyst">
                  Mario Medina
                </textarea>

                <label for="Mitig">Mitigation:</label>
                <textarea id="Mitig" name="Mitigation">
                  Your script should filter metacharacters from useer input
                </textarea>

                <label for="Threat">Threat:</label>
                <textarea id="Threat" name="Threat">
                  Confirmed
                </textarea>

                <label for="Counter">Countermeasure:</label>
                <textarea id="Counter" name="Countermeasure">
                  nput analysis to prevent metacharacters
                </textarea>

                <label for="Impact">Impact:</label>
                <textarea id="Impact" name="Impact">
                  VL
                </textarea>

                <label for="Sever">Severity:</label>
                <textarea id="Sever" name="Severity">
                  I
                </textarea>

                <label for="Risk">Risk:</label>
                <textarea id="Risk" name="Risk">
                  Information
                </textarea>

                <label for="FinSysImp">Finding System Level Impact:</label>
                <textarea id="FinSysImp" name="FindingSystemLevelImpact">
                  Low
                </textarea>
              </form>
            </FindingDetailView>
          </scrollContainers>
        </rect7>
        <titles>
          <h3>Finding Information</h3>
        </titles>
        <rect8>
          <overview2Stack>
            <FindingInformation style={{ overflow: "scroll" }}>
              <form>
                <label for="ID">ID:</label>
                <input type="text" placeholder="" id="ID"></input>

                <label for="HostName">Host Name:</label>
                <input type="text" placeholder="" id="HostName"></input>
                <label for="ip">IP Port:</label>
                <input type="text" placeholder="" id="ip"></input>
                <label for="desc">Description:</label>
                <input type="text" placeholder="" id="desc"></input>
                <label for="LongDesc">Long Description:</label>
                <input type="text" placeholder="" id="LongDesc"></input>
                <br></br>

                <label for="Status">Status:</label>
                <select name="Status" id="stat">
                  <option value="Open">Open</option>
                  <option value="Closed">Closed</option>
                </select>
                <label for="type">Type:</label>
                <select name="type" id="type">
                  <option value="CredComplex">Credential Complexity</option>
                  <option value="Manufacturer">
                    Manufacturer Default Credentials
                  </option>
                  <option value="LackAuth">Lack of Authentication</option>
                  <option value="PTP">Plain Text Protocols</option>
                  <option value="PTWL">Plain Text Web-Login</option>
                  <option value="Encrypt">Encryption</option>
                  <option value="AuthBypass">Authentication Bypass</option>
                  <option value="Port">Port Secuirty</option>
                  <option value="Access">Access Control</option>
                  <option value="LeastPriv">Least Privilege</option>
                  <option value="PrivEscal">Privilage Escalation</option>
                  <option value="unpatched">Missing Patches</option>
                  <option value="Physical">Physical Security</option>
                </select>
                <label for="classificication">Classification:</label>
                <select name="Classification" id="classification">
                  <option value="required"></option>
                </select>
                <br></br>
              </form>

              <form action="/action_page.php">
                <label for="evid">Evidence:</label>
                <input type="file" id="evid" name="vidence"></input>
              </form>

              <label for="System">System:</label>
              <select name="System" id="sys">
                <option value="system1">System 1</option>
                <option value="system2">System 2</option>
              </select>
              <b>or</b>
              <label for="Task">Task:</label>
              <select name="Task" id="task">
                <option value="task1">Task 1</option>
                <option value="task2">Task 2</option>
              </select>
              <b>or</b>
              <label for="Subtask">Subtask:</label>
              <select name="Subtask" id="subTask">
                <option value="subtask1">Subtask 1</option>
                <option value="subtask2">Subtask 2</option>
              </select>

              <br></br>
              <label for="RelatedFindings">Related Findings:</label>
              <div>
                <select name="RelatedFindings" id="relFind" multiple>
                  <option value="finding1">Finding 1</option>
                  <option value="finding2">Finding 2</option>
                  <option value="finding3">Finding 3</option>
                  <option value="finding4">Finding 4</option>
                </select>
              </div>
            </FindingInformation>
          </overview2Stack>
        </rect8>
      </rect4>
    );
  }
};

const FindingInformation = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);

  height: 50vh;
  width: 110%;
`;

const FindingDetailView = styled.span`
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
  height: 50vh;
  overflow: hidden;
`;
export default FindingDetails;
