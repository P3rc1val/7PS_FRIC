import React, { Component } from "react";
import styled, { css } from "styled-components";
//import MaterialButtonTransparentHamburger from "../components/MaterialButtonTransparentHamburger";

class TasksContentOverview extends React.Component() {
  render() {
    return (
      <RectRow>
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
    );
  }
}

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
