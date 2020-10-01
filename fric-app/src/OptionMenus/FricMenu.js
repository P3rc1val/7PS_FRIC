import React, { Component } from "react";
import styled, { css } from "styled-components";
import GeneralView from "../ContentViews/GeneralView.js";
import EventContentView from "../ContentViews/EventContentView.js";
import SystemContentView from "../ContentViews/SystemContentOverview.js";
import TaskContentView from "../ContentViews/TaskContentOverview.js";
import SubtaskContentView from "../ContentViews/SubtaskContentView.js";
import FindingContentView from "../ContentViews/FindingContentView.js";
import ArchiveContentView from "../ContentViews/ArchiveContentView.js";
import SetupContentView from "../ContentViews/SetupContentView.js";
import ConfigContentView from "../ContentViews/ConfigContentView.js";
import { render } from "react-dom";

class FricMenu extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showGeneralView: true,
      showEventView: false,
      showSystemView: false,
      showTaskView: false,
      showSubtaskView: false,
      showFindingView: false,
      showArchiveView: false,
      showConfigView: false,
      showSetupView: false,
    };
    this.hideView = this.hideView.bind(this);
  }
  hideView(viewstate, name) {
    console.log(name);
    switch (name) {
      case "Event":
        this.setState({
          showEventView: true,
          showSystemView: false,
          showTaskView: false,
          showSubtaskView: false,
          showFindingView: false,
          showGeneralView: false,
          showArchiveView: false,
          showSetupView: false,
          showConfigView: false,
        });
        break;
      case "System":
        this.setState({
          showEventView: false,
          showSystemView: true,
          showTaskView: false,
          showSubtaskView: false,
          showFindingView: false,
          showGeneralView: false,
          showArchiveView: false,
          showSetupView: false,
          showConfigView: false,
        });
        break;
      case "Task":
        this.setState({
          showEventView: false,
          showSystemView: false,
          showTaskView: true,
          showSubtaskView: false,
          showFindingView: false,
          showGeneralView: false,
          showArchiveView: false,
          showSetupView: false,
          showConfigView: false,
        });
        break;
      case "Subtask":
        this.setState({
          showEventView: false,
          showSystemView: false,
          showTaskView: false,
          showSubtaskView: true,
          showFindingView: false,
          showGeneralView: false,
          showArchiveView: false,
          showSetupView: false,
          showConfigView: false,
        });
        break;
      case "Finding":
        this.setState({
          showEventView: false,
          showSystemView: false,
          showTaskView: false,
          showSubtaskView: false,
          showFindingView: true,
          showGeneralView: false,
          showArchiveView: false,
          showSetupView: false,
          showConfigView: false,
        });
        break;
      case "Archive":
        this.setState({
          showEventView: false,
          showSystemView: false,
          showTaskView: false,
          showSubtaskView: false,
          showFindingView: false,
          showGeneralView: false,
          showArchiveView: true,
          showSetupView: false,
          showConfigView: false,
        });
        break;
      case "Config":
        this.setState({
          showEventView: false,
          showSystemView: false,
          showTaskView: false,
          showSubtaskView: false,
          showFindingView: false,
          showGeneralView: false,
          showArchiveView: false,
          showSetupView: false,
          showConfigView: true,
        });
        break;
      case "Setup":
        this.setState({
          showEventView: false,
          showSystemView: false,
          showTaskView: false,
          showSubtaskView: false,
          showFindingView: false,
          showGeneralView: false,
          showArchiveView: false,
          showSetupView: true,
          showConfigView: false,
        });
        break;
      case "General":
        break;
      default:
        this.setState({
          showGeneralView: true,
          showEventView: false,
          showSystemView: false,
          showTaskView: false,
          showSubtaskView: false,
          showFindingView: false,
          showArchiveView: false,
          showSetupView: false,
          showConfigView: false,
        });
    }
  }
  render() {
    const {
      showGeneralView,
      showEventView,
      showSystemView,
      showTaskView,
      showSubtaskView,
      showFindingView,
      showArchiveView,
      showConfigView,
      showSetupView,
    } = this.state;
    return (
      <window>
        <div>
          <overviewContainer>
            {showGeneralView && <GeneralView />}

            {showEventView && <EventContentView />}

            {showSystemView && <SystemContentView />}

            {showTaskView && <TaskContentView />}

            {showSubtaskView && <SubtaskContentView />}

            {showFindingView && <FindingContentView />}

            {showArchiveView && <ArchiveContentView />}

            {showConfigView && <ConfigContentView />}

            {showSetupView && <SetupContentView />}
          </overviewContainer>
          <Rect>
            <h2>
              <FricMenuTitle>FRIC Menu</FricMenuTitle>
            </h2>
            <button onClick={() => this.hideView(showEventView, "Event")}>
              <Event>Event</Event>
            </button>
            <button onClick={() => this.hideView(showSystemView, "System")}>
              <Systems>Systems</Systems>
            </button>
            <button onClick={() => this.hideView(showTaskView, "Task")}>
              <Tasks>Tasks</Tasks>
            </button>
            <button onClick={() => this.hideView(showSubtaskView, "Subtask")}>
              <Subtask>Subtask</Subtask>
            </button>
            <button onClick={() => this.hideView(showFindingView, "Finding")}>
              <Findings>Findings</Findings>
            </button>
            <button onClick={() => this.hideView(showArchiveView, "Archive")}>
              <Archive>Archive</Archive>
            </button>
            <button onClick={() => this.hideView(showConfigView, "Config")}>
              <Configuration>Config</Configuration>
            </button>
            <button onClick={() => this.hideView(showSetupView, "Setup")}>
              <Setup>Setup</Setup>
            </button>
            <button>
              <Help>Help</Help>
            </button>
          </Rect>
        </div>
      </window>
    );
  }
}
const window = styled.div``;

const overviewContainer = styled.div`
  padding-left: 104px;
  float: right;
`;
const Rect = styled.div`
  width: 104px;
  height: 100%;
  background-color: #e6e6e6;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
   {
    /*position: absolute;*/
  }
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
  margin: 15px;
`;

const Setup = styled.div`
  margin: 15px;
`;

const Help = styled.div`
  margin: 15px;
`;
render(<FricMenu />, document.getElementById("root"));
export default FricMenu;
