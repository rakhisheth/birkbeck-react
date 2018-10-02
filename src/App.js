import React, { Component } from "react";
import "./App.css";
import Title from "./Components/title";
import Links from "./Components/links";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <header className="App-header">
            <img src="http://wdux1819.bbkweb.org/img/bbk-logo-burgundy.png" />
          </header>
          <Title title="Web Development & User Experience" />
          <ul className="nav-links">
            <Links url="" name="Home" />
            <Links url="" name="Assignment" />
            <Links url="" name="Mailing List" />
            <Links url="" name="Reading List" />
            <Links url="" name="Sessions" />
            <Links url="" name="Staff" />
            <Links url="" name="Students" />
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
