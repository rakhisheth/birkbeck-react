import React, { Component } from "react";
import "./App.css";
import Title from "./Components/Title/title";

import Home from "./Components/Pages/home";
import Assignment from "./Components/Pages/assignment";
import Contacts from "./Components/Pages/contacts";
import ReadingList from "./Components/Pages/reading-list";
import Sessions from "./Components/Pages/sessions";
import Staff from "./Components/Pages/staff";
import Students from "./Components/Pages/students";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Components/Navigation/nav-links";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <header className="App-header">
            <img
              src="http://wdux1819.bbkweb.org/img/bbk-logo-burgundy.png"
              alt="birkbeck-logo"
            />
          </header>
          <Title
            className="sub-title"
            title="Web Development & User Experience"
          />                         
          <div className="nav-links" />
        </div>
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/assignments" component={Assignment} />
              <Route path="/contacts" component={Contacts} />
              <Route path="/reading-list" component={ReadingList} />
              <Route path="/sessions" component={Sessions} />
              <Route path="/staff" component={Staff} />
              <Route path="/students" component={Students} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
