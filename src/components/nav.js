import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "../css/Nav.css";
import resume from "../resume.pdf";
import { Link } from "react-router-dom";

export default function Nav() {
    const [sidebar, setSideBar] = useState(false);

    let hamburgerIcon = sidebar ? "fa fa-times" : "fa fa-bars";

    function showSideBarToggle() {
        setSideBar(!sidebar);
    }

    return (
        <header>
            <nav id='nav'>
                <ul>
                    <li className='nav-title'>
                        <a href='https://pcchiu96.github.io/portfolio'>Paul Chiu</a>
                        <a href='https://www.linkedin.com/in/paul-chiu-373616178'>
                            <i className='fa fa-linkedin-square' aria-hidden='true'></i>
                        </a>
                        <a href='https://github.com/pcchiu96'>
                            <i className='fa fa-github' aria-hidden='true'></i>
                        </a>
                    </li>

                    {/* <li className='nav-links'>
                        <Link to='/Resume'>Resume</Link>
                        <Link to='/About'>About</Link>
                        <Link to='/Contact'>Contact</Link>
                    </li>
                    <li className='nav-hamburger'>
                        <i className={hamburgerIcon} onClick={showSideBarToggle}></i>
                    </li> */}
                </ul>

                <Sidebar show={sidebar} resume={resume} />
            </nav>
        </header>
    );
}
