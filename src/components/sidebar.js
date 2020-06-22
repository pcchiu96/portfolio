import React from "react";
import { Link } from "react-router-dom";
import "../css/Sidebar.css";

export default function Sidebar({ show }) {
    let sidebarClass = "sidebar";
    if (show) sidebarClass += " show-sidebar";

    return (
        <div className={sidebarClass}>
            <a href='https://drive.google.com/file/d/1Rv0gmkG2wpFoOSRRxQMaKs0T6lAgkUkd/view?usp=sharing'>Resume</a>
            <Link to='/about'>About</Link>
        </div>
    );
}
