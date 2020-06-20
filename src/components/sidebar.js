import React from "react";
import { Link } from "react-router-dom";
import "../css/Sidebar.css";

export default function Sidebar({ show }) {
    let sidebarClass = "sidebar";
    if (show) sidebarClass += " show-sidebar";

    return (
        <div className={sidebarClass}>
            <Link to='/resume'>Resume</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    );
}
