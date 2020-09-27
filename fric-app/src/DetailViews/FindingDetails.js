import React, { Component } from "react";
import styled, { css } from "styled-components";

const FindingDetails = () => {
  return (
    <Rect4>
      <titles>
        <h3>Finding Detail View</h3>
      </titles>
      <Rect7>
        <scrollContainers>
          <FindingDetailView style={{ overflow: "scroll" }}>
            <label for="Findinfo">Finding Information:</label>

            <textarea id="Findinfo" name="Findinfo">
              0
            </textarea>
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
          </FindingDetailView>
        </scrollContainers>
      </Rect7>
      <titles>
        <h3>Finding Information</h3>
      </titles>
      <Rect8>
        <Overview2Stack>
          <FindingInformation style={{ overflow: "scroll" }}>
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
        </Overview2Stack>
      </Rect8>
    </Rect4>
  );
};

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
  width: 100%;
  height: 645px;
  background-color: rgba(155, 155, 155, 1);
  flex-direction: column;
  display: flex;
  margin-top: 3px;

  margin-right: 16px;
`;
const Rect8 = styled.div`
  width: 100%;
  height: 100%;
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

const FindingInformation = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);

  height: 105%;
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
  height: 300px;
  overflow: hidden;
`;
export default FindingDetails;
