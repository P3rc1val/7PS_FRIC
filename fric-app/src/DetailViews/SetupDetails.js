import React, { Component } from "react";
import styled, { css } from "styled-components";

const SetupDetails = () => {
  return (
    <div>
      <h1>Setup Detail View</h1>
      <Rect4>
        <titles>
          <h2>There is no existing event in your local system</h2>
        </titles>
        <Rect7>
          <SetupDetailView>
            <form action="/action_page.php">
              <label for="sync option">Please enter your initials:</label>
              <br></br>
              <input type="text" name="new"></input>
              <br></br>
              <br></br>
              <h3>Please select an option:</h3>
              <br></br>
              <div>
                <input
                  type="radio"
                  id="newevent"
                  name="select"
                  value="newevent"
                ></input>
                <label for="new event">
                  Create a new event (any existing event will be archived
                </label>
              </div>
              <input type="radio" name="select" value=""></input>
              <br></br>
              <label for="first sync">
                First time sync with lead analyst. Please enter the lead
                analysts IP:
              </label>
              <br></br>
              <input type="text" name="select"></input>
              <input
                type="radio"
                name="radio-set"
                id="radio-1"
                value="Normal Radio"
              ></input>
              <input
                type="text"
                name="tb1"
                value=""
                placeholder="Option 2"
              ></input>
            </form>
          </SetupDetailView>
        </Rect7>
      </Rect4>
    </div>
  );
};

const Rect4 = styled.div`
  width: 100%px;
  height: 711px;
  background-color: #e6e6e6;
  border-radius: 2px;
  flex-direction: column;
  display: flex;
  margin-left: 28px;
  margin-top: 28px;
  padding: 16px;
`;

const SetupDetailView = styled.span`
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
  width: 100%px;
  height: 500px;
  background-color: rgba(155, 155, 155, 1);
  flex-direction: column;
  display: flex;
  margin-top: 10px;

  margin-right: 5px;
`;
const radioboxes = styled.div``;

export default SetupDetails;
