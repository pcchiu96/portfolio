import React from "react";
import { Nav, Introduction, Projects, Resume, About, Contact, Footer } from "./components/All_Files";
import "./css/App.css";

export default function App() {
    return (
        <div className='app'>
            <Nav />

            {/* TODO: Use built in link control to switch between pages */}

            <Introduction />
            <Projects />
            {/* <Resume /> */}
            {/* <About /> */}
            {/* <Contact /> */}

            <Footer />
        </div>
    );
}
