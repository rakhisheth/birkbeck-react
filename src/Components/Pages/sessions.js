import React from "react";
import Title from "../Title/title";

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
              <a href="/sessions/wdux01/">WDUX01</a>
            </td>
            <td>2018-10-02</td>
            <td>18.00-21.00</td>
            <td>Ines Rebelo/Rebekah Cupitt/Tim Priestman</td>
          </tr>

          <tr>
            <td scope="row">
              <a href="/sessions/wdux02/">WDUX02</a>
            </td>
            <td>2018-10-06</td>
            <td>09:30-16:30</td>
            <td>Giacomo Sorbi/Maria Dada/Bhavik Sheth</td>
          </tr>

          <tr>
            <td scope="row">
              <a href="/sessions/wdux03/">WDUX03</a>
            </td>
            <td>2018-10-13</td>
            <td>09:30-16:30</td>
            <td>Ines Rebelo/Rebekah Cupitt</td>
          </tr>

          <tr>
            <td scope="row">
              <a href="/sessions/wdux04/">WDUX04</a>
            </td>
            <td>2018-10-27</td>
            <td>09:30-16:30</td>
            <td>Giacomo Sorbi/Maria Dada/Bhavik Sheth</td>
          </tr>

          <tr>
            <td scope="row">
              <a href="/sessions/wdux05/">WDUX05</a>
            </td>
            <td>2018-11-10</td>
            <td>09:30-16:30</td>
            <td>Ines Rebelo/Rebekah Cupitt</td>
          </tr>

          <tr>
            <td scope="row">
              <a href="/sessions/wdux06/">WDUX06</a>
            </td>
            <td>2018-11-24</td>
            <td>09:30-16:30</td>
            <td>Giacomo Sorbi/Maria Dada/Bhavik Sheth</td>
          </tr>

          <tr>
            <td scope="row">
              <a href="/sessions/wdux07/">WDUX07</a>
            </td>
            <td>2018-12-01</td>
            <td>09:30-16:30</td>
            <td>Ines Rebelo/Rebekah Cupitt</td>
          </tr>

          <tr>
            <td scope="row">
              <a href="/sessions/wdux08/">WDUX08</a>
            </td>
            <td>2018-12-08</td>
            <td>09:30-16:30</td>
            <td>Giacomo Sorbi/Maria Dada/Bhavik Sheth</td>
          </tr>

          <tr>
            <td scope="row">
              <a href="/sessions/wdux09/">WDUX09</a>
            </td>
            <td>2018-12-11</td>
            <td>18.00-21.00</td>
            <td>Ines Rebelo/Rebekah Cupitt/Tim Priestman</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Sessions;
