import React, { Component } from "react";
import styled, { css } from "styled-components";

function SystemContentOverview(props) {
  return (
    <Container>
      <RectRow>
        <Rect>
          <FricMenu>Fric Menu</FricMenu>
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
            <SystemOverview>System Overview</SystemOverview>
            <Rect6>
              <EventOverviewTable>
                Event Overview Table{"\n"}
                {"\n"}[SRS 16] The systems overview table shall include the
                following components:{"\n"}a. A column of check boxes{"\n"}b. A
                column of text fields with the column header labeled as “System”
                {"\n"}c. An upward/downward arrow within the column header
                labeled as “System”{"\n"}d. A column of text fields with the
                column header labeled as “No. of Tasks”{"\n"}e. An
                upward/downward arrow within the column header labeled as “No.
                of Tasks”{"\n"}f. A column of text fields with the column header
                labeled as “No. of Findings”{"\n"}g. An upward/downward arrow
                within the column header labeled as “No of Findings”{"\n"}h. A
                column of text fields with the column header labeled as
                “Progress”{"\n"}i. An upward/downward arrow within the column
                header labeled as “Progress”.
              </EventOverviewTable>
            </Rect6>
          </Rect3>
          <Rect5>
            <SystemOptions>System Options</SystemOptions>
            <System1Row>
              <System1>
                <Archive7>Archive</Archive7>
              </System1>
              <System2>
                <Save>Save</Save>
              </System2>
              <System3>
                <Cancel>Delete</Cancel>
              </System3>
            </System1Row>
          </Rect5>
        </Rect3Column>
        <Rect4>
          <SystemDetailView>System Detail View</SystemDetailView>
          <Rect7>
            <SystemInformation>
              System Information{"\n"}[SRS 18] The system information shall
              include the following components:{"\n"}a. A title labeled as
              “System Information”{"\n"}b. A text box labeled as “System Name”
              {"\n"}c. A text box labeled as “System Description”{"\n"}d. A text
              box labeled as “System Location”{"\n"}e. A text box labeled as
              “System Router”{"\n"}f. A text box labeled as “System Switch”
              {"\n"}g. A text box labeled as “System Room”{"\n"}h. A text box
              labeled as “Test Plan”.
            </SystemInformation>
          </Rect7>
          <Rect8>
            <EventOverviewTable2Stack>
              <EventOverviewTable2>
                System Categorization{"\n"}[SRS 19] The system categorization
                shall include the following components:{"\n"}a. A dropdown box
                labeled as “Confidentiality”{"\n"}b. A dropdown box labeled as
                “Integrity”{"\n"}c. A dropdown box labeled as “Availability”.
              </EventOverviewTable2>
              <Text></Text>
            </EventOverviewTable2Stack>
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
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 10px;
  margin-left: 34px;
`;

const Event = styled.div`
  width: 78px;
  height: 59px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 9px;
  flex-direction: column;
  display: flex;
  margin-top: 25px;
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

const SystemOverview = styled.span`
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
  margin-top: 21px;
  margin-left: 12px;
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

const SystemOptions = styled.span`
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
`;

const Archive7 = styled.span`
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
  margin-left: 63px;
`;

const Save = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 21px;
  margin-left: 20px;
`;

const System3 = styled.div`
  width: 78px;
  height: 59px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 9px;
  flex-direction: column;
  display: flex;
  margin-left: 65px;
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
  height: 59px;
  flex-direction: row;
  display: flex;
  margin-top: 50px;
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

const SystemDetailView = styled.span`
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

const EventOverviewTable2 = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
`;

const Text = styled.span`
  font-family: Roboto;
  top: 38px;
  left: 23px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const EventOverviewTable2Stack = styled.div`
  width: 470px;
  height: 85px;
  margin-top: 17px;
  margin-left: 11px;
  position: relative;
`;

const RectRow = styled.div`
  height: 768px;
  flex-direction: row;
  display: flex;
  margin-right: 33px;
`;

export default SystemContentOverview;
