import React from "react";
import "./nav.css";

export default function Nav() {
    return (
        <nav id='nav'>
            <ul>
                <li className='nav-title'>Paul Chiu</li>
                <li className='nav-hamburger'>
                    <i className='fa fa-bars'></i>
                </li>
            </ul>
        </nav>
    );
}
