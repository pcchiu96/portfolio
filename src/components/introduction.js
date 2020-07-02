import React from "react";
import "../css/Introduction.css";

export default function Introduction() {
    return (
        <div className='introduction-wrapper'>
            <div className='introduction'>
                <div className='intro-sentence'>
                    <h1>I am a passionate software developer who likes to make impactful apps.</h1>
                    <p>Full Stack Developer in Tiger Applications LLC</p>
                </div>

                {/* make this clickable */}
                <div className='view-my-work'>
                    View my work <i className='fa fa-angle-down'></i>
                </div>
            </div>
        </div>
    );
}
