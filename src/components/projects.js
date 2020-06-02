import React from "react";
import "./projects.css";

export default function Projects() {
    return (
        <div className='projects-wrapper'>
            <section className='projects'>
                <section>
                    <i className='fa fa-angle-down'></i>
                    <h3>
                        <a href='./unlock-code/src/index.js'>Unlock Code</a>
                    </h3>
                    <p>This is just a fun little project I made to see if I can replicate what Snowden said about passwords under 8 characters can be solved under a second.</p>
                </section>
                <section>
                    <i className='fa fa-angle-down'></i>
                    <h3>
                        <a href='./unlock-code/src/index.js'>Connect 4</a>
                    </h3>
                    <p>A 2 players board game that I built to practice coding in ReactJS.</p>
                </section>
                <section>
                    <i className='fa fa-angle-down'></i>
                    <h3>
                        <a href='https://www.tigerapplicationsllc.com/index.php?page=index'>Tiger Applications LLC</a>
                    </h3>
                    <p>A work in progress website I designed and built for Tiger Applications LLC.</p>
                </section>
                <section>
                    <i className='fa fa-angle-down'></i>
                    <h3>StrataPLBm</h3>
                    <p>A client-server application that provide simple management of condo/apartment requests from residents.</p>
                </section>
            </section>
        </div>
    );
}
