import React from "react";
import "../css/Projects.css";

export default function Projects() {
    return (
        <div className='projects-background'>
            <div className='projects-wrapper'>
                <div className='projects'>
                    <section>
                        <i className='project-icon fa fa-gamepad' aria-hidden='true'></i>
                        <h3>
                            <a href='https://github.com/pcchiu96/Werewolf-Bot'>
                                <i className='project-code-icon fa fa-code' aria-hidden='true'></i> Discord Werewolf Bot
                            </a>
                        </h3>
                        <p>A discord werewolf game that's similar to mafia but with a fun twist.</p>
                    </section>
                    <section>
                        <i className='project-icon fa fa-square-o' aria-hidden='true'></i>
                        <h3>
                            {/* <a href='https://github.com/pcchiu96/Connect_4'>
                                <i className='fa fa-eye' aria-hidden='true'></i> Preview
                            </a> */}
                            <a href='https://github.com/pcchiu96/Connect_4'>
                                <i className='project-code-icon fa fa-code' aria-hidden='true'></i> Connect 4
                            </a>
                        </h3>
                        <p>A 2-players board game that I built to practice coding in ReactJS.</p>
                    </section>
                    <section>
                        <i className='project-icon fa fa-unlock-alt' aria-hidden='true'></i>
                        <h3>
                            <a href='https://github.com/pcchiu96/Unlock_Code'>
                                <i className='project-code-icon fa fa-code' aria-hidden='true'></i> Unlock Code
                            </a>
                        </h3>
                        <p>This is just a fun little project I made to see if I can replicate what Snowden said about passwords under 8 characters can be solved under a second.</p>
                    </section>

                    <section>
                        <i className='project-icon fa fa-wrench' aria-hidden='true'></i>
                        <h3>
                            <a href='https://www.tigerapplicationsllc.com/index.php?page=index'>Tiger Applications LLC</a>
                        </h3>
                        <p>A work in progress website I designed and built for Tiger Applications LLC.</p>
                    </section>
                    <section>
                        <i className='project-icon fa fa-wrench' aria-hidden='true'></i>
                        <h3>StrataPLBm</h3>
                        <p>A client-server application that provide simple management of condo/apartment requests from residents.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
