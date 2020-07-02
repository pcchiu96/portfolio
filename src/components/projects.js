import React from "react";
import "../css/Projects.css";

export default function Projects() {
    return (
        <div className='projects-background' id='projects-pointer'>
            <div className='projects-wrapper'>
                <div className='projects'>
                    <section>
                        <i className='project-icon fa fa-circle-o' aria-hidden='true'></i>
                        <h3>Fruit Melody</h3>
                        <a href='https://pcchiu96.github.io/fruitmelody'>
                            <button className='b-view'>View Project</button>
                        </a>
                        <a href='https://github.com/pcchiu96/fruitmelody'>
                            <button className='b-view'>View Code</button>
                        </a>
                        <p>A website I designed for my artist friend Fruit Melody.</p>
                        <p className='language-icons'>
                            <i className='devicon-html5-plain colored' title='HTML5'></i>
                            <i className='devicon-css3-plain colored' title='CSS3'></i>
                            <i className='devicon-javascript-plain colored' title='JavaScript'></i>
                        </p>
                    </section>

                    <section>
                        <i className='project-icon fa fa-circle-o' aria-hidden='true'></i>
                        <h3>Connect 4</h3>
                        <a href='https://pcchiu96.github.io/connect-4'>
                            <button className='b-view'>View Project</button>
                        </a>
                        <a href='https://github.com/pcchiu96/connect-4'>
                            <button className='b-view'>View Code</button>
                        </a>
                        <p>A 2-player board game that I built to practice coding in ReactJS.</p>
                        <p className='language-icons'>
                            <i className='devicon-react-original colored' title='React'></i>
                            <i className='devicon-javascript-plain colored' title='JavaScript'></i>
                            <i className='devicon-html5-plain colored' title='HTML5'></i>
                            <i className='devicon-css3-plain colored' title='CSS3'></i>
                        </p>
                    </section>

                    <section>
                        <i className='project-icon fa fa-gamepad' aria-hidden='true'></i>
                        <h3>Discord Werewolf Bot</h3>
                        <a href='https://github.com/pcchiu96/discord-werewolf-bot'>
                            <button className='b-view'>View Code</button>
                        </a>
                        <p>A discord werewolf game that is similar to mafia but with a fun twist.</p>
                        <p className='language-icons'>
                            <i className='devicon-nodejs-plain colored' title='NodeJS'></i>
                            <i className='devicon-javascript-plain colored' title='JavaScript'></i>
                        </p>
                    </section>

                    <section>
                        <i className='project-icon fa fa-smile-o' aria-hidden='true'></i>
                        <h3>Discord Emoji Tracker</h3>
                        <a href='https://github.com/pcchiu96/discord-emoji-tracker'>
                            <button className='b-view'>View Code</button>
                        </a>
                        <p>A discord emoji tracker that my discord group used weekly to find the popularity of each custom emoji.</p>
                        <p className='language-icons'>
                            <i className='devicon-nodejs-plain colored' title='NodeJS'></i>
                            <i className='devicon-javascript-plain colored' title='JavaScript'></i>
                        </p>
                    </section>

                    <section>
                        <i className='project-icon fa fa-unlock-alt' aria-hidden='true'></i>
                        <h3>Unlock Code</h3>
                        <a href='https://pcchiu96.github.io/unlock-code'>
                            <button className='b-view'>View Project</button>
                        </a>
                        <a href='https://github.com/pcchiu96/unlock-code'>
                            <button className='b-view'>View Code</button>
                        </a>
                        <p>
                            This is just a fun little project I made to see if I can replicate what Snowden said about passwords under 8 characters can be solved under a second but
                            with numbers.
                        </p>
                        <p className='language-icons'>
                            <i className='devicon-javascript-plain colored' title='JavaScript'></i>
                            <i className='devicon-html5-plain colored' title='HTML5'></i>
                            <i className='devicon-css3-plain colored' title='CSS3'></i>
                        </p>
                    </section>

                    <section>
                        <i className='project-icon fa fa-car' aria-hidden='true'></i>
                        <h3>Tiger Applications LLC</h3>
                        <a href='https://www.tigerapplicationsllc.com/index.php?page=index'>
                            <button className='b-view'>View Project</button>
                        </a>
                        <p>A work in progress website I designed and built for Tiger Applications LLC.</p>
                        <p className='language-icons'>
                            <i className='devicon-php-plain colored' title='PHP'></i>
                            <i className='devicon-javascript-plain colored' title='JavaScript'></i>
                            <i className='devicon-html5-plain colored' title='HTML5'></i>
                            <i className='devicon-less-plain-wordmark colored' title='LESS'></i>
                            <i className='devicon-css3-plain colored' title='CSS3'></i>
                        </p>
                    </section>
                    {/* 
                    <section>
                        <i className='project-icon fa fa-wrench' aria-hidden='true'></i>
                        <h3>StrataPLBm</h3>
                        <p>A client-server application that provide simple management of condo/apartment requests from residents.</p>
                        <p className='language-icons'>
                            <i className='devicon-php-plain colored' title='PHP'></i>
                            <i className='devicon-javascript-plain colored' title='JavaScript'></i>
                            <i className='devicon-html5-plain colored' title='HTML5'></i>
                            <i className='devicon-less-plain-wordmark colored' title='LESS'></i>
                            <i className='devicon-css3-plain colored' title='CSS3'></i>
                        </p>
                    </section> */}

                    <section>
                        <i className='project-icon fa fa-user' aria-hidden='true'></i>
                        <h3>Portfolio</h3>
                        <p>You are looking at it!</p>
                        <a href='https://github.com/pcchiu96/portfolio'>
                            <button className='b-view'>View Code</button>
                        </a>
                        <p className='language-icons'>
                            <i className='devicon-react-original colored' title='React'></i>
                            <i className='devicon-javascript-plain colored' title='JavaScript'></i>
                            <i className='devicon-html5-plain colored' title='HTML5'></i>
                            <i className='devicon-css3-plain colored' title='CSS3'></i>
                            <i className='devicon-github-plain colored' title='GitHub'></i>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
