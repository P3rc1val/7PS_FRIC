import React, { Component } from "react";
import styled, { css } from "styled-components";

class FricMenu extends Component {
  render() {
    return (
      <Rect>
        <h2>
          <FricMenuTitle>FRIC Menu</FricMenuTitle>
        </h2>
        <button>
          <Event>Event</Event>
        </button>
        <button>
          <Systems>Systems</Systems>
        </button>
        <button>
          <Tasks>Tasks</Tasks>
        </button>
        <button>
          <Subtask>Subtask</Subtask>
        </button>
        <button>
          <Findings>Findings</Findings>
        </button>
        <button>
          <Archive>Archive</Archive>
        </button>
        <button>
          <Configuration>Config.</Configuration>
        </button>
        <button>
          <Setup>Setup</Setup>
        </button>
        <button>
          <Help>Help</Help>
        </button>
      </Rect>
    );
  }
}

const Rect = styled.div`
  width: 104px;
  height: 100%;
  background-color: #e6e6e6;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  position: absolute;
  padding-right: ;
`;

const FricMenuTitle = styled.span`
  padding: 16px;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  justify-text: center;
`;

const Event = styled.div`
  margin: 15px;
`;

const Systems = styled.div`
  margin: 15px;
`;

const Tasks = styled.div`
  margin: 15px;
`;

const Subtask = styled.div`
  margin: 15px;
`;

const Findings = styled.div`
  margin: 15px;
`;

const Archive = styled.div`
  margin: 15px;
`;

const Configuration = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Setup = styled.div`
  margin: 15px;
`;

const Help = styled.div`
  margin: 15px;
`;

export default FricMenu;
