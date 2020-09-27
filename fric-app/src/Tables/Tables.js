import React, { Component } from "react";
import styled, { css } from "styled-components";
import Table from "react-bootstrap/Table";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";

const eventTable = () => {
  return (
    <Table striped bordered hover variant="light" size="sm" responsive>
      <thead>
        <tr>
          <th>Select</th>
          <th>Event name</th>
          <th>No. of Systems</th>
          <th>No. of Findings</th>
          <th>Progress</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="checkbox" name="ch1" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="ch2" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="ch3" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="ch4" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="ch5" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
};
const systemTable = () => {
  render(
    <Table striped bordered hover variant="light" size="sm" responsive>
      <thead>
        <tr>
          <th>Select</th>
          <th>System</th>
          <th>No. of Tasks</th>
          <th>No. of Findings</th>
          <th>Progress</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="checkbox" name="ch1" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="ch2" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="ch3" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="ch4" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="ch5" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
};
const taskTable = () => {
  render(
    <Table striped bordered hover variant="light" size="sm" responsive>
      <thead>
        <tr>
          <th>Select</th>
          <th>Title</th>
          <th>System</th>
          <th>Analyst</th>
          <th>Priority</th>
          <th>Progress</th>
          <th>No. of Subasks</th>
          <th>No. of Findings</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="checkbox" name="ch2" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="ch3" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="ch4" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="ch5" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
};
const subtaskTable = () => {
  render(
    <Table striped bordered hover variant="light" size="sm" responsive>
      <thead>
        <tr>
          <th>Select</th>
          <th>Title</th>
          <th>Task</th>
          <th>Analyst</th>
          <th>Progress</th>
          <th>No. of Findings</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="checkbox" name="ch1" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="ch2" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="ch3" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="ch4" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
};
const findingTable = () => {
  render(
    <Table striped bordered hover variant="light" size="sm" responsive>
      <thead>
        <tr>
          <th>Select</th>
          <th>ID</th>
          <th>Title</th>
          <th>System</th>
          <th>Task</th>
          <th>Finding</th>
          <th>Analyst</th>
          <th>Status</th>
          <th>Classification</th>
          <th>Type</th>
          <th>Risk</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="checkbox" name="ch1" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="ch2" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="ch3" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="ch4" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <th></th>
          <th></th>
        </tr>
      </tbody>
    </Table>
  );
};
const archiveTable = () => {
  render();
};
