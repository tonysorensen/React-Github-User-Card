import React from 'react'
import githublogo from '../assets/githublogo.png';
import lambdalogo from '../assets/lambdalogo.png'


export default function Header() {
    return (
        <header className="header">
            <img src={lambdalogo} className="logo" alt="logo" />
        <p>
        &#10084;'s
        </p>
        <img src={githublogo} className="logo" alt="logo" />
        </header>
    )
}
