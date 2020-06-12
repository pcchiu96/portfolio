import React from "react";
import "../css/Introduction.css";

export default function Introduction() {
    return (
        <header>
            <div className='introduction'>
                <h1>I'm a passionate software developer that makes cool apps.</h1>
                <p>Full Stack Developer in Tiger Applications LLC</p>
            </div>

            <div className='b-wrapper'>
                <button className='b-my-work'>
                    View my work <i className='fa fa-angle-down'></i>
                </button>
            </div>
        </header>
    );
}
