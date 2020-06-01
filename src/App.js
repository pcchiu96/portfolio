import React from "react";
import Nav from "./nav.js";
import Introduction from "./introduction";
import "./styles.less";

export default function App() {
    return (
        <div className='App'>
            <header id='header' className='alt'>
                <Nav />
                <Introduction />
            </header>
        </div>
    );
}
