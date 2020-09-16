import React, { Component } from "react";
import styled, { css } from "styled-components";
//import MaterialButtonTransparentHamburger from "./EventContentView/src/components/";
//import EntypoIcon from "react-native-vector-icons/dist/Entypo";

function EventContentView(props) {
  return (
    <Container>
      <RectRow>
        <Rect>
          <FricMenuStack>
            <FricMenu>Fric Menu</FricMenu>
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
            <EventOverViewRow>
              <EventOverView>Event OverView</EventOverView>
            </EventOverViewRow>
            <Rect6>
              <EventOverviewTable>
                Event Overview Table{"\n"}[SRS 7] The event overview table shall
                include the following components:{"\n"}a. A column of check
                boxes{"\n"}b. A column of text fields with the column header
                labeled as “Event Name”{"\n"}c. An upward/downward arrow within
                the column header labeled as “Event name”{"\n"}d. A column of
                text fields with the column header labeled as “No. of Systems”
                {"\n"}e. An upward/downward arrow within the column header
                labeled as “No. of Systems”{"\n"}f. A column of text fields with
                the column header labeled as “No. of Findings”{"\n"}g. An
                upward/downward arrow within the column header labeled as “No of
                Findings”{"\n"}h. A column of text fields with the column header
                labeled as “Progress”{"\n"}i. An upward/downward arrow within
                the column header labeled as “Progress”.
              </EventOverviewTable>
            </Rect6>
          </Rect3>
          <Rect5>
            <EventOptions>Event Options</EventOptions>
            <System1Row>
              <System1>
                <LoremIpsum>Delete</LoremIpsum>
              </System1>
              <System2>
                <Save>Save</Save>
              </System2>
              <System3>
                <Cancel>Cancel</Cancel>
              </System3>
            </System1Row>
          </Rect5>
        </Rect3Column>
        <Rect4>
          <EventDetailViewRow>
            <EventDetailView>Event Detail View</EventDetailView>
          </EventDetailViewRow>
          <Rect7>
            <EventOverviewTable1>
              Event Basic Information{"\n"}
              {"\n"}a. A title labeled as “Event Basic Information”{"\n"}b. A
              text box labeled as “Event Name”{"\n"}c. A text box labeled as
              “Event Description”{"\n"}d. A dropdown box labeled as “Event Type”
              {"\n"}e. A text box labeled as “Event Version”{"\n"}f. A text box
              labeled as “Assessment Date”{"\n"}g. A text box labeled as
              “Organization Name”{"\n"}h. A text box labeled as “Security
              Classification Title Guide”{"\n"}i. A dropdown box labeled as
              “Event Classification”{"\n"}j. A text box labeled as
              “Declassification Date”{"\n"}k. A text box labeled as “Customer
              Name”.
            </EventOverviewTable1>
          </Rect7>
          <Rect8>
            <EventOverviewTable2Stack>
              <EventOverviewTable2>
                Event Team Information{"\n"}a. A title labeled as “Event Team
                Information”{"\n"}b. A title labeled as “Lead Analysts”{"\n"}c.
                An add icon for adding Lead Analyst{"\n"}d. A column of check
                boxes{"\n"}e. A dropdown box with Remove, Edit, and Sync options
                {"\n"}f. A column of text fields displaying the analyst initial
                {"\n"}g. A title labeled as “Analysts”{"\n"}h. An add icon for
                adding Analyst{"\n"}i. A column of check boxes{"\n"}j. A
                dropdown box with Remove, Edit, and Sync options{"\n"}k. A
                column of text fields displaying the analyst initial.
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

const EventOverView = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 15px;
`;

const EventOverViewRow = styled.div`
  height: 44px;
  flex-direction: row;
  display: flex;
  margin-top: 8px;
  margin-left: 12px;
  margin-right: 17px;
`;

const Rect6 = styled.div`
  width: 416px;
  height: 421px;
  background-color: rgba(155, 155, 155, 1);
  flex-direction: column;
  display: flex;
  margin-top: 1px;
  margin-left: 12px;
`;

const EventOverviewTable = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin-top: 20px;
  margin-left: 10px;
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

const EventOptions = styled.span`
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

const LoremIpsum = styled.span`
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

const EventDetailView = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 8px;
`;

const EventDetailViewRow = styled.div`
  height: 44px;
  flex-direction: row;
  display: flex;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 16px;
`;

const Rect7 = styled.div`
  width: 704px;
  height: 318px;
  background-color: rgba(155, 155, 155, 1);
  flex-direction: column;
  display: flex;
  margin-top: 3px;
  margin-left: 16px;
`;

const EventOverviewTable1 = styled.span`
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
  top: 35px;
  left: 23px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const EventOverviewTable2Stack = styled.div`
  width: 342px;
  height: 204px;
  margin-top: 20px;
  margin-left: 11px;
  position: relative;
`;

const RectRow = styled.div`
  height: 768px;
  flex-direction: row;
  display: flex;
  margin-right: 33px;
`;

export default EventContentView;
