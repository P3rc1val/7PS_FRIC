import React, { Component } from "react";
import styled, { css } from "styled-components";

const TaskDetails = () => {
  return (
    <Rect4>
      <titles>
        <h3>Task Detail View</h3>
      </titles>
      <Rect7>
        <scrollContainers>
          <TaskDetailView style={{ overflow: "scroll" }}>
            <label for="w3review">Title</label>
            <form action="/action_page.php">
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
              ></textarea>
            </form>
            <label for="w3review">Description</label>
            <form action="/action_page.php">
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
              ></textarea>
            </form>

            <label>System</label>

            <select id="myList">
              <option value="1">Select</option>
            </select>

            <label>Priority</label>

            <select id="myList">
              <option value="1">Select</option>
            </select>

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

            <label>Related Task(s)</label>

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
          </TaskDetailView>
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

const Rect7 = styled.div`
  width: 400px;
  height: 645px;
  background-color: rgba(155, 155, 155, 1);
  flex-direction: column;
  display: flex;
  margin-top: 3px;

  margin-right: 16px;
`;

const TaskDetailView = styled.span`
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
export default TaskDetails;
