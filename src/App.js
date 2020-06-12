import React from "react";
import { Nav, Introduction, Projects, Skills } from "./components/All_Files";
import "./css/App.css";

export default function App() {
    return (
        <div className='app'>
            <header>
                <Nav />
                <Introduction />
            </header>

            <main>
                <Projects />
            </main>

            <footer>
                <ul>
                    <li>
                        <a href='https://www.linkedin.com/in/paul-chiu-373616178'>
                            <i className='fa fa-linkedin-square' aria-hidden='true'></i>
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/pcchiu96'>
                            <i className='fa fa-github' aria-hidden='true'></i>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}
