import React, { Component } from "react";
import styled, { css } from "styled-components";

const SubtaskDetails = () => {
  return (
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
              <input type="file" id="myfile" name="myfile" multiple></input>
              <input type="submit"></input>
            </form>
          </SubtaskDetailView>
        </scrollContainers>
      </Rect7>
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
const Rect7 = styled.div`
  width: 400px;
  height: 645px;
  background-color: rgba(155, 155, 155, 1);
  flex-direction: column;
  display: flex;
  margin-top: 3px;

  margin-right: 16px;
`;

export default SubtaskDetails;
