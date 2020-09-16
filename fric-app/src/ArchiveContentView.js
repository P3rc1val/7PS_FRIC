import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialButtonTransparentHamburger from "../components/MaterialButtonTransparentHamburger";

function ArchiveContentView(props) {
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
            <Event1>Event</Event1>
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
        <Rect3>
          <Archives2Stack>
            <Archives2>Archives</Archives2>
            <GroupStack>
              <Group>
                <System2>
                  <Tasks6>Tasks</Tasks6>
                </System2>
              </Group>
              <Rect6>
                <OverviewTable>Overview Table</OverviewTable>
              </Rect6>
            </GroupStack>
            <Group1>
              <System5>
                <Subtasks>Subtasks</Subtasks>
              </System5>
            </Group1>
            <Group2>
              <System6>
                <Findings6>Findings</Findings6>
              </System6>
            </Group2>
            <Group3>
              <System7>
                <Systems6>Systems</Systems6>
              </System7>
            </Group3>
            <Event2>
              <Restore>RESTORE</Restore>
            </Event2>
          </Archives2Stack>
        </Rect3>
      </RectRow>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-width: 1px;
  border-color: #000000;
  flex-direction: row;
  border-style: solid;
  height: 100vh;
  width: 100vw;
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
  margin-left: 13px;
`;

const Event1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 21px;
  margin-left: 18px;
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
  width: 1219px;
  height: 712px;
  background-color: #e6e6e6;
  border-radius: 2px;
  flex-direction: column;
  display: flex;
  margin-left: 19px;
  margin-top: 27px;
`;

const Archives2 = styled.span`
  font-family: Roboto;
  top: 34px;
  left: 6px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const Group = styled.div`
  top: 0px;
  left: 134px;
  width: 78px;
  height: 43px;
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const System2 = styled.div`
  width: 78px;
  height: 43px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 9px;
  flex-direction: column;
  display: flex;
`;

const Tasks6 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 13px;
  margin-left: 20px;
`;

const Rect6 = styled.div`
  top: 34px;
  left: 0px;
  width: 1185px;
  height: 629px;
  position: absolute;
  background-color: rgba(155, 155, 155, 1);
  flex-direction: column;
  display: flex;
`;

const OverviewTable = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 17px;
  margin-left: 19px;
`;

const GroupStack = styled.div`
  top: 25px;
  left: 0px;
  width: 1185px;
  height: 663px;
  position: absolute;
`;

const Group1 = styled.div`
  top: 25px;
  left: 222px;
  width: 78px;
  height: 43px;
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const System5 = styled.div`
  width: 78px;
  height: 43px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 9px;
  flex-direction: column;
  display: flex;
`;

const Subtasks = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 13px;
  margin-left: 11px;
`;

const Group2 = styled.div`
  top: 25px;
  left: 309px;
  width: 78px;
  height: 43px;
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const System6 = styled.div`
  width: 78px;
  height: 43px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 9px;
  flex-direction: column;
  display: flex;
`;

const Findings6 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 13px;
  margin-left: 13px;
`;

const Group3 = styled.div`
  top: 25px;
  left: 398px;
  width: 78px;
  height: 43px;
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const System7 = styled.div`
  width: 78px;
  height: 43px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 9px;
  flex-direction: column;
  display: flex;
`;

const Systems6 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 13px;
  margin-left: 13px;
`;

const Event2 = styled.div`
  top: 0px;
  left: 900px;
  width: 229px;
  height: 50px;
  position: absolute;
  background-color: rgba(160, 193, 233, 1);
  border-radius: 9px;
  flex-direction: column;
  display: flex;
`;

const Restore = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  margin-top: 17px;
  margin-left: 85px;
`;

const Archives2Stack = styled.div`
  width: 1185px;
  height: 688px;
  margin-top: 8px;
  margin-left: 17px;
  position: relative;
`;

const RectRow = styled.div`
  height: 768px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 24px;
`;

export default ArchiveContentView;
