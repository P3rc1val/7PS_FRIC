import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialButtonTransparentHamburger from "../components/MaterialButtonTransparentHamburger";

function TasksContentOverview(props) {
  return (
    <Container>
      <RectRow>
        <Rect>
          <FricMenuStack>
            <FricMenu>Fric Menu</FricMenu>
            <MaterialButtonTransparentHamburger
              style={{
                height: 36,
                width: 36,
                position: "absolute",
                left: 0,
                top: 0,
              }}
            ></MaterialButtonTransparentHamburger>
          </FricMenuStack>
          <Event>
            <Event3>Event</Event3>
          </Event>
          <System>
            <Systems1>Systems</Systems1>
          </System>
          <Task>
            <Tasks1>Tasks</Tasks1>
          </Task>
          <Subtask>
            <Subtask1>Subtask</Subtask1>
          </Subtask>
          <Finding>
            <Findings1>Findings</Findings1>
          </Finding>
          <Archive>
            <Archive1>Archive</Archive1>
          </Archive>
          <ConfigurationStack>
            <Configuration></Configuration>
            <Configuration1>Configuration</Configuration1>
          </ConfigurationStack>
          <Setup>
            <Setup1>Setup</Setup1>
          </Setup>
          <Help>
            <Help1>Help</Help1>
          </Help>
        </Rect>
        <Rect3Column>
          <Rect3>
            <TasksOverview>Tasks Overview</TasksOverview>
            <Rect6>
              <EventOverviewTable>
                Tasks Overview Table{"\n"}
                {"\n"}[SRS 22] The tasks overview table shall include the
                following components:{"\n"}a. A column of check boxes{"\n"}b. A
                column of text fields with the column header labeled as “Title”
                {"\n"}c. An upward/downward arrow within the column header
                labeled as “Title”{"\n"}d. A column of text fields with the
                column header labeled as “System”{"\n"}e. An upward/downward
                arrow within the column header labeled as “System”{"\n"}f. A
                column of text fields with the column header labeled as
                “Analyst”{"\n"}g. An upward/downward arrow within the column
                header labeled as “Analyst”{"\n"}h. A column of text fields with
                the column header labeled as “Priority”{"\n"}i. An
                upward/downward arrow within the column header labeled as
                “Priority”{"\n"}j. A column of text fields with the column
                header labeled as “Progress”{"\n"}k. An upward/downward arrow
                within the column header labeled as “Progress”{"\n"}l. A column
                of text fields with the column header labeled as “No. of
                Subtasks”{"\n"}m. An upward/downward arrow within the column
                header labeled as “No. of Subtasks”{"\n"}n. A column of text
                fields with the column header labeled as “No. of Findings”{"\n"}
                o. An upward/downward arrow within the column header labeled as
                “No. of Findings”{"\n"}p. A column of text fields with the
                column header labeled as “Due Date”{"\n"}q. An upward/downward
                arrow within the column header labeled as “Due Date”.
              </EventOverviewTable>
            </Rect6>
          </Rect3>
          <Rect5>
            <TaskOptions>Task Options</TaskOptions>
            <System1Row>
              <System1>
                <Archive2>Archive</Archive2>
              </System1>
              <System2>
                <Demote>Demote</Demote>
              </System2>
              <System4>
                <Save>Save</Save>
              </System4>
              <System3>
                <Cancel>Cancel</Cancel>
              </System3>
            </System1Row>
          </Rect5>
        </Rect3Column>
        <Rect4>
          <TaskDetailView>Task Detail View</TaskDetailView>
          <Rect7>
            <SystemInformation>
              [SRS 23] The task detailed view shall include the following
              components:{"\n"}a. A help icon{"\n"}b. A title labeled as “Task
              Detailed View”{"\n"}c. A text box labeled as “Title”{"\n"}d. A
              text box labeled as “Description”{"\n"}e. A dropdown box labeled
              as “System”{"\n"}f. A dropdown box labeled as “Priority”{"\n"}g. A
              dropdown box labeled as “Progress”{"\n"}h. A date picker labeled
              as “Due Date”{"\n"}i. A multiple selection dropdown box labeled as
              “Analyst(s)”{"\n"}j. A multiple selection dropdown box labeled as
              “Collaborator(s)”{"\n"}k. A multiple selection dropdown box
              labeled as “Related Task(s)”{"\n"}l. A file selection box labeled
              as “Attachments”.
            </SystemInformation>
          </Rect7>
          <Rect8>
            <Text></Text>
          </Rect8>
        </Rect4>
      </RectRow>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-width: 1px;
  border-color: #000000;
  flex-direction: column;
  border-style: solid;
`;

const Rect = styled.div`
  width: 104px;
  height: 768px;
  background-color: #e6e6e6;
  flex-direction: column;
  display: flex;
`;

const FricMenu = styled.span`
  font-family: Roboto;
  top: 10px;
  left: 34px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const FricMenuStack = styled.div`
  width: 95px;
  height: 36px;
  position: relative;
`;

const Event = styled.div`
  width: 78px;
  height: 59px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 9px;
  flex-direction: column;
  display: flex;
  margin-top: 16px;
  margin-left: 12px;
`;

const Event3 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 21px;
  margin-left: 19px;
`;

const System = styled.div`
  width: 78px;
  height: 59px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 9px;
  flex-direction: column;
  display: flex;
  margin-top: 19px;
  margin-left: 12px;
`;

const Systems1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 21px;
  margin-left: 13px;
`;

const Task = styled.div`
  width: 78px;
  height: 59px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 9px;
  flex-direction: column;
  display: flex;
  margin-top: 19px;
  margin-left: 12px;
`;

const Tasks1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 21px;
  margin-left: 19px;
`;

const Subtask = styled.div`
  width: 78px;
  height: 59px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 9px;
  flex-direction: column;
  display: flex;
  margin-top: 17px;
  margin-left: 12px;
`;

const Subtask1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 21px;
  margin-left: 11px;
`;

const Finding = styled.div`
  width: 78px;
  height: 59px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 9px;
  flex-direction: column;
  display: flex;
  margin-top: 18px;
  margin-left: 12px;
`;

const Findings1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 21px;
  margin-left: 13px;
`;

const Archive = styled.div`
  width: 78px;
  height: 59px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 9px;
  flex-direction: column;
  display: flex;
  margin-top: 19px;
  margin-left: 12px;
`;

const Archive1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 20px;
  margin-left: 16px;
`;

const Configuration = styled.div`
  top: 0px;
  left: 2px;
  width: 78px;
  height: 59px;
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 9px;
`;

const Configuration1 = styled.span`
  font-family: Roboto;
  top: 21px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const ConfigurationStack = styled.div`
  width: 84px;
  height: 59px;
  margin-top: 20px;
  margin-left: 10px;
  position: relative;
`;

const Setup = styled.div`
  width: 78px;
  height: 59px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 9px;
  flex-direction: column;
  display: flex;
  margin-top: 20px;
  margin-left: 12px;
`;

const Setup1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 21px;
  margin-left: 18px;
`;

const Help = styled.div`
  width: 78px;
  height: 59px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 9px;
  flex-direction: column;
  display: flex;
  margin-top: 19px;
  margin-left: 12px;
`;

const Help1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 20px;
  margin-left: 22px;
`;

const Rect3 = styled.div`
  width: 446px;
  height: 489px;
  background-color: #e6e6e6;
  border-radius: 2px;
  flex-direction: column;
  display: flex;
  margin-left: -1px;
`;

const TasksOverview = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 23px;
  margin-left: 12px;
`;

const Rect6 = styled.div`
  width: 416px;
  height: 421px;
  background-color: rgba(155, 155, 155, 1);
  flex-direction: column;
  display: flex;
  margin-top: 13px;
  margin-left: 12px;
`;

const EventOverviewTable = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  font-size: 11px;
  margin-top: 21px;
  margin-left: 14px;
`;

const Rect5 = styled.div`
  width: 446px;
  height: 193px;
  background-color: #e6e6e6;
  border-radius: 2px;
  flex-direction: column;
  display: flex;
  margin-top: 30px;
  margin-left: -1px;
`;

const TaskOptions = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 29px;
  margin-left: 19px;
`;

const System1 = styled.div`
  width: 78px;
  height: 59px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 9px;
  flex-direction: column;
  display: flex;
  margin-top: 1px;
`;

const Archive2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 21px;
  margin-left: 19px;
`;

const System2 = styled.div`
  width: 78px;
  height: 59px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 9px;
  flex-direction: column;
  display: flex;
  margin-left: 17px;
`;

const Demote = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 21px;
  margin-left: 19px;
`;

const System4 = styled.div`
  width: 78px;
  height: 59px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 9px;
  flex-direction: column;
  display: flex;
  margin-left: 18px;
`;

const Save = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 21px;
  margin-left: 15px;
`;

const System3 = styled.div`
  width: 78px;
  height: 59px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 9px;
  flex-direction: column;
  display: flex;
  margin-left: 15px;
  margin-top: 1px;
`;

const Cancel = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 20px;
  margin-left: 19px;
`;

const System1Row = styled.div`
  height: 60px;
  flex-direction: row;
  display: flex;
  margin-top: 49px;
  margin-left: 31px;
  margin-right: 53px;
`;

const Rect3Column = styled.div`
  width: 446px;
  flex-direction: column;
  display: flex;
  margin-left: 19px;
  margin-top: 28px;
  margin-bottom: 28px;
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
`;

const TaskDetailView = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 23px;
  margin-left: 20px;
`;

const Rect7 = styled.div`
  width: 704px;
  height: 318px;
  background-color: rgba(155, 155, 155, 1);
  flex-direction: column;
  display: flex;
  margin-top: 22px;
  margin-left: 16px;
`;

const SystemInformation = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin-top: 21px;
  margin-left: 12px;
`;

const Rect8 = styled.div`
  width: 704px;
  height: 295px;
  background-color: rgba(155, 155, 155, 1);
  flex-direction: column;
  display: flex;
  margin-top: 17px;
  margin-left: 17px;
`;

const Text = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 55px;
  margin-left: 34px;
`;

const RectRow = styled.div`
  height: 768px;
  flex-direction: row;
  display: flex;
  margin-right: 33px;
`;

export default TasksContentOverview;
