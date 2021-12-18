import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Nav,
  Introduction,
  Projects,
  About,
  Footer,
} from "./components/All_Files";
import "./css/App.css";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Switch>
          <Route path="/portfolio">
            <Introduction />
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}
