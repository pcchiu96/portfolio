import React from "react";
import "../css/Projects.css";
import fruitmelody from "../images/fm_favicon.png";

export default function Projects() {
  return (
    <div className="projects-background" id="projects-pointer">
      <div className="projects-wrapper">
        <div className="projects">
          <section>
            <i className="project-icon fa fruitmelody" aria-hidden="true">
              <img src={fruitmelody} alt="Fruit Melody Icon"></img>
            </i>
            <h3>Fruit Melody</h3>
            <a className="b-view-code" href="https://www.fruit-melody.com">
              View Project
            </a>
            <p className="project-description">A website I designed for my artist friend Fruit Melody.</p>
            <p className="language-icons">
              <i className="devicon-php-plain" title="PHP"></i>
              <i className="devicon-html5-plain colored" title="HTML5"></i>
              <i className="devicon-css3-plain colored" title="CSS3"></i>
              <i className="devicon-javascript-plain colored" title="JavaScript"></i>
            </p>
          </section>

          <section>
            <i className="project-icon fa fa-circle-o" aria-hidden="true"></i>
            <h3>Connect 4</h3>
            <a className="b-view-project" href="https://pcchiu96.github.io/connect-4">
              View Project
            </a>
            <p className="project-description">A 2-player board game that I built to practice coding in ReactJS.</p>
            <p className="language-icons">
              <i className="devicon-react-original colored" title="React"></i>
              <i className="devicon-javascript-plain colored" title="JavaScript"></i>
              <i className="devicon-html5-plain colored" title="HTML5"></i>
              <i className="devicon-css3-plain colored" title="CSS3"></i>
            </p>
          </section>

          <section>
            <i className="project-icon fa fa-gamepad" aria-hidden="true"></i>
            <h3>Discord Werewolf Bot</h3>
            <a className="b-view-code" href="https://github.com/pcchiu96/discord-werewolf-bot">
              <i className="fa fa-github" aria-hidden="true"></i> View Code
            </a>
            <p className="project-description">A discord werewolf game that is similar to mafia but with a fun twist.</p>
            <p className="language-icons">
              <i className="devicon-nodejs-plain colored" title="NodeJS"></i>
              <i className="devicon-javascript-plain colored" title="JavaScript"></i>
            </p>
          </section>

          <section>
            <i className="project-icon fa fa-smile-o" aria-hidden="true"></i>
            <h3>Discord Emoji Tracker</h3>
            <a className="b-view-code" href="https://github.com/pcchiu96/discord-emoji-tracker">
              <i className="fa fa-github" aria-hidden="true"></i> View Code
            </a>
            <p className="project-description">A discord emoji tracker that my discord group used weekly to find the popularity of each custom emoji.</p>
            <p className="language-icons">
              <i className="devicon-nodejs-plain colored" title="NodeJS"></i>
              <i className="devicon-javascript-plain colored" title="JavaScript"></i>
            </p>
          </section>

          <section>
            <i className="project-icon fa fa-unlock-alt" aria-hidden="true"></i>
            <h3>Unlock Code</h3>
            <a className="b-view-project" href="https://pcchiu96.github.io/unlock-code">
              View Project
            </a>
            <p className="project-description">A fun little project to replicate what Snowden said about passwords under 8 characters can be solved under a second but with numbers.</p>
            <p className="language-icons">
              <i className="devicon-javascript-plain colored" title="JavaScript"></i>
              <i className="devicon-html5-plain colored" title="HTML5"></i>
              <i className="devicon-css3-plain colored" title="CSS3"></i>
            </p>
          </section>

          <section>
            <i className="project-icon fa fa-user" aria-hidden="true"></i>
            <h3>Portfolio</h3>
            <p>You are looking at it!</p>
            <p className="language-icons">
              <i className="devicon-react-original colored" title="React"></i>
              <i className="devicon-javascript-plain colored" title="JavaScript"></i>
              <i className="devicon-html5-plain colored" title="HTML5"></i>
              <i className="devicon-css3-plain colored" title="CSS3"></i>
              <i className="devicon-github-plain colored" title="GitHub"></i>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
