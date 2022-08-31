import React from "react";
import "../css/About.css";

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="about">
        <section>
          <h2>A little bit about me</h2>
          <p>
            I am a Taiwanese software developer that speaks fluent English and Mandarin. My passion is creating awesome tech that are impactful around me, such as a convenient discord bot that can
            help my friends get the popularity ranking of each custom emojis or a beautiful commission webpage for my awesome artist friend. I also love learning new technologies because learning
            makes me a better thinker and finer problem solver.
          </p>
          <p>When I'm not coding or solving problems, I am most likely be drawing, watching movies, or playing badminton.</p>
        </section>
        <section>
          <h2>Reach me at</h2>
          <address className="reach-me">
            <a href="mailto:pcchiu96@gmail.com">
              <i className="fa fa-envelope-o" aria-hidden="true"></i> Email
            </a>
            <a href="tel:7788580576">
              <i className="fa fa-phone" aria-hidden="true"></i> Phone: 778-858-0576
            </a>
          </address>
        </section>
      </div>
    </div>
  );
}
