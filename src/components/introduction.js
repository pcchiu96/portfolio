import React from "react";
import "../css/Introduction.css";

export default function Introduction() {
    return (
        <div className='introduction'>
            <div className='intro-sentence'>
                <h1>I'm a passionate software developer that likes to make cool apps.</h1>
                <p>Full Stack Developer in Tiger Applications LLC</p>
            </div>

            <div className='view-my-work'>
                View my work <i className='fa fa-angle-down'></i>
            </div>
        </div>
    );
}
