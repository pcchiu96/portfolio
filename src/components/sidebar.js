import React from "react";
import "../css/Sidebar.css";

export default function Sidebar({ show }) {
    let sidebarClass = "sidebar";
    if (show) sidebarClass += " show-sidebar";

    return (
        <div className={sidebarClass}>
            <a href=''>
                <i className='fa fa-address-card' aria-hidden='true'></i> Resume
            </a>
            <a href=''>
                <i className='fa fa-info-circle' aria-hidden='true'></i> About
            </a>
            <a href=''>
                <i className='fa fa-phone-square' aria-hidden='true'></i> Contact
            </a>
        </div>
    );
}
