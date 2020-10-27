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
import { Button } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import EventIcon from "@material-ui/icons/Event";
import ComputerIcon from "@material-ui/icons/Computer";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import FormatListNumberedRtlIcon from "@material-ui/icons/FormatListNumberedRtl";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";
import ArchiveIcon from "@material-ui/icons/Archive";
import PermDataSettingIcon from "@material-ui/icons/PermDataSetting";
import TuneIcon from "@material-ui/icons/Tune";
import HelpIcon from "@material-ui/icons/Help";
import { Typography } from "@material-ui/core";
const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#7fcd91",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#8fcd91",
    },
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      label: {
        // Some CSS
        align: "left",
      },
    },
  },
});
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
          <ThemeProvider theme={theme}>
            <Rect>
              <h2>
                <FricMenuTitle>FRIC</FricMenuTitle>
              </h2>
              <Button
                startIcon={<AccountTreeIcon />}
                variant="text"
                color="primary"
                onClick={() => this.hideView(showEventView, "Event")}
              >
                <Event>Event</Event>
              </Button>
              <Button
                startIcon={<ComputerIcon />}
                variant="text"
                color="primary"
                onClick={() => this.hideView(showSystemView, "System")}
              >
                <Systems>Systems</Systems>
              </Button>
              <Button
                align
                startIcon={<FormatListNumberedIcon />}
                variant="text"
                color="primary"
                onClick={() => this.hideView(showTaskView, "Task")}
              >
                <Tasks>Tasks</Tasks>
              </Button>
              <Button
                startIcon={<FormatListNumberedRtlIcon />}
                variant="text"
                color="primary"
                onClick={() => this.hideView(showSubtaskView, "Subtask")}
              >
                <Subtask>Subtask</Subtask>
              </Button>
              <Button
                startIcon={<FolderSpecialIcon />}
                variant="text"
                color="primary"
                onClick={() => this.hideView(showFindingView, "Finding")}
              >
                <Findings>Findings</Findings>
              </Button>
              <Button
                startIcon={<ArchiveIcon />}
                variant="text"
                color="primary"
                onClick={() => this.hideView(showArchiveView, "Archive")}
              >
                <Archive>Archive</Archive>
              </Button>
              <Button
                startIcon={<PermDataSettingIcon />}
                variant="text"
                color="primary"
                onClick={() => this.hideView(showConfigView, "Config")}
              >
                <Configuration>Config</Configuration>
              </Button>
              <Button
                startIcon={<TuneIcon />}
                variant="text"
                color="primary"
                onClick={() => this.hideView(showSetupView, "Setup")}
              >
                <Setup>Setup</Setup>
              </Button>
              <Button startIcon={<HelpIcon />} variant="text" color="primary">
                <Help>Help</Help>
              </Button>
            </Rect>
          </ThemeProvider>
        </div>
      </window>
    );
  }
}
const window = styled.div``;

const overviewContainer = styled.div`
  float: right;
`;
const Rect = styled.div`
  width: 120px;
  height: 100vh;

  background-color: #4d4646;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;
  position: absolute;
`;

const FricMenuTitle = styled.span`
  padding: 16px;
  font-style: normal;
  font-weight: 400;
  color: #7fcd91;
  justify-text: center;
`;

const Event = styled.div`
  color: #f5eaea;
`;

const Systems = styled.div`
  color: #f5eaea;
`;

const Tasks = styled.div`
  color: #f5eaea;
`;

const Subtask = styled.div`
  color: #f5eaea;
`;

const Findings = styled.div`
  color: #f5eaea;
`;

const Archive = styled.div`
  color: #f5eaea;
`;

const Configuration = styled.div`
  color: #f5eaea;
`;

const Setup = styled.div`
  color: #f5eaea;
`;

const Help = styled.div`
  color: #f5eaea;
`;
render(<FricMenu />, document.getElementById("root"));
export default FricMenu;
