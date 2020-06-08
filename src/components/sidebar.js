import React from "react";
import "./sidebar.css";

export default function Sidebar({ show }) {
    let sidebarClass = "sidebar";
    if (show) sidebarClass += " show-sidebar";

    return (
        <nav className={sidebarClass}>
            <ul>
                <li>
                    <a href='https://pcchiu96.github.io/portfolio'>Paul Chiu</a>
                </li>
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
        </nav>
    );
}
