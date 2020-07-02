import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../css/Nav.css";

export default function Nav() {
    const [sidebar, setSideBar] = useState(false);

    let hamburgerIcon = sidebar ? "fa fa-times" : "fa fa-bars";
    let resumeLink = "https://drive.google.com/file/d/1ub9xxyWqKH4suL9TwFwLZ9Y8ITRl_8m6/view?usp=sharing";

    function showSideBarToggle() {
        setSideBar(!sidebar);
    }

    return (
        <header>
            <nav>
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

                    <li className='nav-links'>
                        <a href={resumeLink}>Resume</a>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className='nav-hamburger'>
                        <i className={hamburgerIcon} onClick={showSideBarToggle}></i>
                    </li>
                </ul>

                <Sidebar show={sidebar} resume={resumeLink} />
            </nav>
        </header>
    );
}
