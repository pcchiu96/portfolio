import React from "react";

export default function Nav() {
    return (
        <nav id='nav'>
            <ul>
                <li>
                    <div>Home</div>
                </li>
                <li>
                    <div>Projects</div>
                    <ul>
                        <li>
                            <div>Tiger Applications LLC</div>
                        </li>
                        <li>
                            <div>Connect 4</div>
                        </li>
                        <li>
                            <div>One Night Ultimate Werewolf</div>
                        </li>
                        <li>
                            <div>Unlock Code</div>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}
