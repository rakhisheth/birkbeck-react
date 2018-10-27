import React from "react";
import Title from "../Title/title";
import data from "../sessions-data";

const Sessions = () => {
  return (
    <div className="pages">
      <Title title="Sessions" />
      <table>
        <thead>
          <tr>
            <th scope="col">Session</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Tutors</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">
              <a href="{data[0].session}">WDUX01</a>
            </td>
            <td>{data[0].date}</td>
            <td>{data[0].time}</td>
            <td>{data[0].tutors}</td>
          </tr>

          <tr>
            <td scope="row">
              <a href="{data[1].session}">WDUX02</a>
            </td>
            <td>{data[1].date}</td>
            <td>{data[1].time}</td>
            <td>{data[1].tutors}</td>
          </tr>

          <tr>
            <td scope="row">
              <a href="{data[2].session}">WDUX03</a>
            </td>
            <td>{data[2].date}</td>
            <td>{data[2].time}</td>
            <td>{data[2].tutors}</td>
          </tr>

          <tr>
            <td scope="row">
              <a href="{data[3].session}">WDUX04</a>
            </td>
            <td>{data[3].date}</td>
            <td>{data[3].time}</td>
            <td>{data[3].tutors}</td>
          </tr>

          <tr>
            <td scope="row">
              <a href="{data[4].session}">WDUX05</a>
            </td>
            <td>{data[4].date}</td>
            <td>{data[4].time}</td>
            <td>{data[4].tutors}</td>
          </tr>

          <tr>
            <td scope="row">
              <a href="{data[5].session}">WDUX06</a>
            </td>
            <td>{data[5].date}</td>
            <td>{data[5].time}</td>
            <td>{data[5].tutors}</td>
          </tr>

          <tr>
            <td scope="row">
              <a href="{data[6].session}">WDUX07</a>
            </td>
            <td>{data[6].date}</td>
            <td>{data[6].time}</td>
            <td>{data[6].tutors}</td>
          </tr>

          <tr>
            <td scope="row">
              <a href="{data[7].session}">WDUX08</a>
            </td>
            <td>{data[7].date}</td>
            <td>{data[7].time}</td>
            <td>{data[7].tutors}</td>
          </tr>

          <tr>
            <td scope="row">
              <a href="{data[8].session}">WDUX09</a>
            </td>
            <td>{data[8].date}</td>
            <td>{data[8].time}</td>
            <td>{data[8].tutors}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Sessions;
