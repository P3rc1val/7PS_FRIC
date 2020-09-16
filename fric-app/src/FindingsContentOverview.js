import React, { Component } from "react";
import styled, { css } from "styled-components";

function FindingContentView(props) {
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
            <FindingsOverview>Findings Overview</FindingsOverview>
            <Rect6>
              <EventOverviewTable>
                Tasks Overview Table{"\n"}
                {"\n"}[SRS 30] The findings overview table shall include the
                following components:{"\n"}a. A column of check boxes{"\n"}b. A
                column of text fields with the column header labeled as “ID”
                {"\n"}c. A column of text fields with the column header labeled
                as “Title”{"\n"}d. An upward/downward arrow within the column
                header labeled as “Title”{"\n"}e. A column of text fields with
                the column header labeled as “System”{"\n"}f. An upward/downward
                arrow within the column header labeled as “System”{"\n"}g. A
                column of text fields with the column header labeled as “Task”
                {"\n"}h. An upward/downward arrow within the column header
                labeled as “Task”{"\n"}i. A column of text fields with the
                column header labeled as “Subtask”{"\n"}j. An upward/downward
                arrow within the column header labeled as “Subtask”{"\n"}k. A
                column of text fields with the column header labeled as
                “Analyst”{"\n"}l. An upward/downward arrow within the column
                header labeled as “Analyst”{"\n"}m. A column of text fields with
                the column header labeled as “Status”{"\n"}n. An upward/downward
                arrow within the column header labeled as “Status”{"\n"}o. A
                column of text fields with the column header labeled as
                “Classification”{"\n"}p. An upward/downward arrow within the
                column header labeled as “Classification”{"\n"}q. A column of
                text fields with the column header labeled as “Type”{"\n"}r. An
                upward/downward arrow within the column header labeled as “Type”
                {"\n"}s. A column of text fields with the column header labeled
                as “Risk”{"\n"}t. An upward/downward arrow within the column
                header labeled as “Risk”.
              </EventOverviewTable>
            </Rect6>
            <System5Row>
              <System5>
                <ErbReport>ERB {"\n"}Report</ErbReport>
              </System5>
              <System6>
                <RiskMatrix>Risk{"\n"}Matrix</RiskMatrix>
              </System6>
              <System7>
                <FinalReport>Final {"\n"}Report</FinalReport>
              </System7>
            </System5Row>
          </Rect3>
          <Rect5>
            <FindingOptions>Finding Options</FindingOptions>
            <System1Row>
              <System1>
                <Finding5>Delete</Finding5>
              </System1>
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
          <FindingDetailView>Finding Detail View</FindingDetailView>
          <Rect7>
            <SystemInformation>
              [SRS 31] The finding detailed view shall include the following
              components:{"\n"}a. Help icon{"\n"}b. Finding information{"\n"}c.
              Finding impact{"\n"}d. Analyst information{"\n"}e. Mitigation
              {"\n"}f. Threat{"\n"}g. Countermeasure{"\n"}h. Impact{"\n"}i.
              Severity{"\n"}j. Risk{"\n"}k. Finding system level impact.
            </SystemInformation>
          </Rect7>
          <Rect8>
            <TextStack>
              <Text></Text>
              <LoremIpsum>
                [SRS 32] The finding information shall include the following
                components:{"\n"}a. A help icon{"\n"}b. A title labeled as
                “Finding Information”{"\n"}c. A text field labeled as “ID”{"\n"}
                d. A text box labeled as “Host Name”{"\n"}e. A text box labeled
                as “IP Port”{"\n"}f. A text box labeled as “Description”{"\n"}g.
                A text box labeled as “Long Description”{"\n"}h. A dropdown box
                labeled as “Status”{"\n"}i. A dropdown box labeled as “Type”
                {"\n"}j. A dropdown box labeled as “Classification”{"\n"}k. A
                file selection box labeled as “Evidence”.{"\n"}l. A dropdown box
                labeled as “System”{"\n"}m. A label labeled as “OR”{"\n"}n. A
                dropdown box labeled as “Task”{"\n"}o. A label labeled as “OR”
                {"\n"}p. A dropdown box labeled as “Subtask”{"\n"}q. A multiple
                selection dropdown box labeled as “Related Finding(s)”.
              </LoremIpsum>
            </TextStack>
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

const FindingsOverview = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 23px;
  margin-left: 12px;
`;

const Rect6 = styled.div`
  width: 416px;
  height: 353px;
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
  margin-top: 22px;
  margin-left: 14px;
`;

const System5 = styled.div`
  width: 78px;
  height: 59px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 9px;
  flex-direction: column;
  display: flex;
  margin-top: 1px;
`;

const ErbReport = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  text-align: center;
  margin-top: 13px;
  margin-left: 18px;
`;

const System6 = styled.div`
  width: 78px;
  height: 59px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 9px;
  flex-direction: column;
  display: flex;
  margin-left: 72px;
`;

const RiskMatrix = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  text-align: center;
  margin-top: 14px;
  margin-left: 19px;
`;

const System7 = styled.div`
  width: 78px;
  height: 59px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 9px;
  flex-direction: column;
  display: flex;
  margin-left: 56px;
  margin-top: 1px;
`;

const FinalReport = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  text-align: center;
  margin-top: 16px;
  margin-left: 18px;
`;

const System5Row = styled.div`
  height: 60px;
  flex-direction: row;
  display: flex;
  margin-top: 12px;
  margin-left: 31px;
  margin-right: 53px;
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

const FindingOptions = styled.span`
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

const Finding5 = styled.span`
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
  margin-left: 72px;
`;

const Save = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 21px;
  margin-left: 26px;
`;

const System3 = styled.div`
  width: 78px;
  height: 59px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 9px;
  flex-direction: column;
  display: flex;
  margin-left: 56px;
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

const FindingDetailView = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 23px;
  margin-left: 17px;
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
  top: 24px;
  left: 13px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  font-size: 11px;
`;

const TextStack = styled.div`
  width: 354px;
  height: 234px;
  margin-top: 31px;
  margin-left: 21px;
  position: relative;
`;

const RectRow = styled.div`
  height: 768px;
  flex-direction: row;
  display: flex;
  margin-right: 33px;
`;

export default FindingContentView;
