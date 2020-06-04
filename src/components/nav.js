import React from "react";
import "./nav.css";

export default function Nav() {
    return (
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
                <li className='nav-hamburger'>
                    <i className='fa fa-bars'></i>
                </li>
            </ul>
        </nav>
    );
}
