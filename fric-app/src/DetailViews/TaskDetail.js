import React, { Component } from "react";
import styled, { css } from "styled-components";
import "../App.css"

const TaskDetails = () => {
  return (
    <rect4>
      <titles>
        <h3>Task Detail View</h3>
      </titles>
      <rect7>
        <scrollContainers>
          <detailView style={{ overflow: "scroll" }}>
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
          </detailView>
        </scrollContainers>
      </rect7>
    </rect4>
  );
};




export default TaskDetails;
