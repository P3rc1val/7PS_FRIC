import React, { Component } from "react";
import styled, { css } from "styled-components";
import Table from "react-bootstrap/Table";
import ReactDOM from "react-dom";

import "../App.css";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
class GeneralView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initials: "",
      password: "",
      message: "",
      open: false,
    };
  }

  setInitials = (event) => {
    this.setState({
      initials: event.target.value,
    });
  };

  signIn = () => {
    if (this.state.initials === "AR" || "RC") {
      this.setState({
        open: true,
        message: "Analyst initials added.",
      });
    } else {
      this.setState({
        open: true,
        //message: "Incorrect Username or Password!"
      });
    }
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div className="initialView">
        <RectRow>
          <Typography variant="h3">
            Finding and Reporting Information Console
          </Typography>

          <header className="initialView-header">
            <div className="Login">
              <TextField
                variant="standard"
                placeholder="Initials"
                margin="normal"
                required
                onChange={this.setInitials}
                value={this.state.initials}
              />

              <div className="Button">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    this.signIn();
                  }}
                >
                  Ok
                </Button>
              </div>
            </div>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">Sign In</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {this.state.message}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Okay
                </Button>
              </DialogActions>
            </Dialog>
          </header>
        </RectRow>
      </div>
    );
  }
}
// constructor() {
//   super();
//   this.state = {
//     name: "React",
//   };
// }
// render() {
//   return (
//     <RectRow>
//       <ContextViewContainer>
//         <ContextView>
//           <Table striped bordered hover variant="light">
//             <thead>
//               <tr>
//                 <th>Select</th>
//                 <th>Event name</th>
//                 <th>No. of Systems</th>
//                 <th>No. of Findings</th>
//                 <th>Progress</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>
//                   <input type="checkbox" name="ch1" />
//                 </td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//               </tr>

//               <tr>
//                 <td>
//                   <input type="checkbox" name="ch2" />
//                 </td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//               </tr>
//               <tr>
//                 <td>
//                   <input type="checkbox" name="ch3" />
//                 </td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//               </tr>
//               <tr>
//                 <td>
//                   <input type="checkbox" name="ch4" />
//                 </td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//               </tr>
//               <tr>
//                 <td>
//                   <input type="checkbox" name="ch5" />
//                 </td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//               </tr>
//             </tbody>
//           </Table>
//         </ContextView>
//       </ContextViewContainer>
//       <Rect2Column>
//         <EventTreeContainer>
//           <EventTree>
//             <ul id="myUL">
//               <li>
//                 <span class="caret">Event</span>
//                 <ul class="nested">
//                   <li>
//                     <span class="caret">System 1</span>
//                     <ul class="nested">
//                       <li>
//                         <span class="caret">Task 1</span>
//                         <ul class="nested">
//                           <li>
//                             <span class="caret">Subtask 1</span>
//                             <ul class="nested">
//                               <li>Finding 1</li>
//                               <li>Finding 2</li>
//                             </ul>
//                           </li>
//                           <li>Subtask 2</li>
//                         </ul>
//                       </li>
//                       <li>
//                         <span class="caret">Task 2</span>
//                         <ul class="nested">
//                           <li>Finding 3</li>
//                           <li>Finding 4</li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </li>
//                   <li>System 2 </li>
//                 </ul>
//               </li>
//             </ul>
//           </EventTree>
//         </EventTreeContainer>
//         <SearchBoxContainer>
//           <SearchBox>Search Box</SearchBox>
//         </SearchBoxContainer>
//       </Rect2Column>
//     </RectRow>
//   );
// }

// const Container = styled.div`
//   display: flex;
//   border-width: 1px;
//   border-color: #000000;
//   flex-direction: row;
//   border-style: solid;
// `;

// const ContextViewContainer = styled.div`
//   width: 485px;
//   height: 719px;
//   background-color: #e6e6e6;
//   border-radius: 2px;
//   flex-direction: column;
//   display: flex;
//   margin-left: 26px;
//   margin-top: 23px;
// `;

// const ContextView = styled.span`
//   font-style: normal;
//   font-weight: 400;
//   color: #121212;
//   margin: 20px;
// `;

// const EventTreeContainer = styled.div`
//   width: 684px;
//   height: 397px;
//   background-color: #e6e6e6;
//   border-radius: 2px;
//   flex-direction: column;
//   display: flex;
// `;

// const EventTree = styled.span`
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: 400;
//   color: #121212;
//   margin-top: 23px;
//   margin-left: 26px;
// `;

// const SearchBoxContainer = styled.div`
//   width: 684px;
//   height: 291px;
//   background-color: #e6e6e6;
//   border-radius: 2px;
//   flex-direction: column;
//   display: flex;
//   margin-top: 31px;
// `;

// const SearchBox = styled.span`
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: 400;
//   color: #121212;
//   margin-top: 25px;
//   margin-left: 34px;
// `;

// const Rect2Column = styled.div`
//   width: 684px;
//   flex-direction: column;
//   display: flex;
//   margin-left: 33px;
//   margin-top: 23px;
//   margin-bottom: 26px;
// `;

const RectRow = styled.div`
  height: 768px;
  flex-direction: column;
  margin-top: 200px;
  display: flex;
  margin-right: 170px;
  float: right;
`;

export default GeneralView;
