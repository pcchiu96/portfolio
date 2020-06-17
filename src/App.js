import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav, Introduction, Projects, Resume, About, Contact, Footer } from "./components/All_Files";
import "./css/App.css";

export default function App() {
    return (
        <div className='app'>
            <Router>
                <Nav />
                <Switch>
                    <Route exact path='/'>
                        <Introduction />
                        <Projects />
                    </Route>
                    <Route path='/Resume'>
                        <Resume />
                    </Route>
                    <Route path='/About'>
                        <About />
                    </Route>
                    <Route path='/Contact'>
                        <Contact />
                    </Route>
                </Switch>
            </Router>

            <Footer />
        </div>
    );
}
