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

import Footer from "./Components/Footer/footer";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Components/Navigation/navigation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/assignments" component={Assignment} />
              <Route path="/contacts" component={Contacts} />
              <Route path="/reading-list" component={ReadingList} />
              <Route path="/sessions" component={Sessions} />
              <Route path="/staff" component={Staff} />
              <Route path="/students" component={Students} />
            </Switch>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
