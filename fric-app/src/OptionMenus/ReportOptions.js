import React, { Component } from "react";
import styled, { css } from "styled-components";

const FunctionName = () => {
  return (
    <ReportOptionsRow>
      <button>
        <ERBReport>ERB Report</ERBReport>
      </button>
      <button>
        <RiskMatrix>Risk Matrix</RiskMatrix>
      </button>
      <button>
        <FinalReport>Final Report</FinalReport>
      </button>
    </ReportOptionsRow>
  );
};

const ERBReport = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 78px;
  height: 59px;
`;
const RiskMatrix = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 78px;
  height: 59px;
`;

const FinalReport = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 78px;
  height: 59px;
`;

const ReportOptionsRow = styled.div`
  height: 59px;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  margin-top: 50px;
  margin-left: 31px;
  margin-right: 53px;
`;
export default FunctionName;
