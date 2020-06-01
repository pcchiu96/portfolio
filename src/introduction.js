import React from "react";

export default function Introduction() {
    return (
        <section id='main' className='container'>
            <section className='box special'>
                <header className='major'>
                    <h2>My name is Paul Chiu</h2>
                    <p>I'm a passionate software developer that likes to solve questions and make cool things.</p>
                </header>
            </section>

            <section className='box special features'>
                <div className='features-row'>
                    <section>
                        <span className='icon solid major fa-lock-open accent2'></span>
                        <h3>
                            <a href='./unlock-code/src/index.js'>Unlock Code</a>
                        </h3>
                        <p>This is just a fun little project I made to see if I can replicate what Snowden said about passwords under 8 characters can be solved under a second.</p>
                    </section>
                    <section>
                        <span className='icon solid major fa-vector-square accent3'></span>
                        <h3>
                            <a href='./unlock-code/src/index.js'>Connect 4</a>
                        </h3>
                        <p>A 2 players board game that I built to practice coding in ReactJS.</p>
                    </section>
                </div>
                <div className='features-row'>
                    <section>
                        <span className='icon solid major fa-desktop accent4'></span>
                        <h3>
                            <a href='https://www.tigerapplicationsllc.com/index.php?page=index'>Tiger Applications LLC</a>
                        </h3>
                        <p>A work in progress website I designed and built for Tiger Applications LLC.</p>
                    </section>
                    <section>
                        <span className='icon solid major fa-home accent5'></span>
                        <h3>StrataPLBm</h3>
                        <p>A client-server application that provide simple management of condo/apartment requests from residents.</p>
                    </section>
                </div>
            </section>
        </section>
    );
}
