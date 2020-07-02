import React from "react";
import "../css/About.css";

export default function About() {
    return (
        <div class='about-wrapper'>
            <div class='about'>
                <section>
                    <h2>A little bit about me</h2>
                    <p>
                        I am a recent graduate that is currently working as a Full Stack Developer at Tiger Applications LLC. It's where I constantly thrive to hone my abilities to
                        create a seamless user experience.
                    </p>
                    <p>
                        Ever since I first encountered my very first computer, I have been fascinated by how technology charms people around the worlds together and bring so many
                        mesmerizing joy and laughters to everyone. Being able to feel so connected to my friends when they live on the other side of the world has inspired me to
                        wanting to create similar but impactful applications.
                    </p>
                </section>
                <section>
                    <h2>Reach me at</h2>
                    <address class='reach-me'>
                        <a href='mailto:pcchiu96@gmail.com'>
                            <i class='fa fa-envelope-o' aria-hidden='true'></i> Email
                        </a>
                        <br />
                        <a href='tel:7788580576'>Phone: 778-858-0576</a>
                    </address>
                </section>
            </div>
        </div>
    );
}
