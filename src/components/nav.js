import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../css/Nav.css";

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

                    <li className='nav-links'>
                        <Link to='/resume'>
                            <i className='fa fa-address-card' aria-hidden='true'></i> Resume
                        </Link>
                        <Link to='/about'>
                            <i className='fa fa-info-circle' aria-hidden='true'></i> About
                        </Link>
                        <Link to='/contact'>
                            <i className='fa fa-phone-square' aria-hidden='true'></i> Contact
                        </Link>
                    </li>
                    <li className='nav-hamburger'>
                        <i className={hamburgerIcon} onClick={showSideBarToggle}></i>
                    </li>
                </ul>

                <Sidebar show={sidebar} />
            </nav>
        </header>
    );
}
