import React from "react";
import { Nav, Introduction, Projects } from "./components";
import "./style.css";

export default function App() {
    return (
        <div className='background'>
            <div className='header-wrapper'>
                <header>
                    <Nav />
                    <Introduction />
                </header>
            </div>
            <div className='my-work'>
                <Projects />
            </div>
        </div>
    );
}
