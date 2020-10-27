// import React, { Component } from "react";
// import styled, { css } from "styled-components";
// import Table from "react-bootstrap/Table";
// import { render } from "@testing-library/react";
// import ReactDOM from "react-dom";
// import "../App.css";
import React, { Component } from "react";
import styled, { css } from "styled-components";
import Table from "react-bootstrap/Table";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import "../App.css";
import { ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";
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

const SystemOptions = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box component="span" m={1} color="primary">
        <ButtonGroup aria-label="outlined default button group">
          <Button>Delete</Button>
          <Button type="submit" name="save">
            Save
          </Button>
          <Button>Cancel</Button>
        </ButtonGroup>
      </Box>
    </ThemeProvider>
  );
};

export default SystemOptions;

// const SystemOptions = () => {
//   return (
//     <rect5>
//       <h3>System Options</h3>
//       <optionsRow>
//         <button>
//           <Delete>Delete</Delete>
//         </button>
//         <button>
//           <Save>Save</Save>
//         </button>
//         <button label="Cancel">
//           <Cancel>Cancel</Cancel>
//         </button>
//       </optionsRow>
//     </rect5>
//   );
// };

// const Delete = styled.span`
//   font-style: normal;
//   font-weight: 400;
//   color: #121212;
//   width: 78px;
//   height: 59px;
// `;
// const Save = styled.span`
//   font-style: normal;
//   font-weight: 400;
//   color: #121212;
//   width: 78px;
//   height: 59px;
// `;

// const Cancel = styled.span`
//   font-style: normal;
//   font-weight: 400;
//   color: #121212;
//   width: 78px;
//   height: 59px;
// `;
