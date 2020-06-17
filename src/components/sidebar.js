import React from "react";
import { Link } from "react-router-dom";
import "../css/Sidebar.css";

export default function Sidebar({ show }) {
    let sidebarClass = "sidebar";
    if (show) sidebarClass += " show-sidebar";

    return (
        <div className={sidebarClass}>
            <Link to='/resume'>
                <i className='fa fa-address-card' aria-hidden='true'></i> Resume
            </Link>
            <Link to='/about'>
                <i className='fa fa-info-circle' aria-hidden='true'></i> About
            </Link>
            <Link to='/contact'>
                <i className='fa fa-phone-square' aria-hidden='true'></i> Contact
            </Link>
        </div>
    );
}
