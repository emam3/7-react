import React from 'react';
import './nav.css'
import { useMediaQuery } from 'react-responsive';


export const NavBar = () => {
    const isMobile = useMediaQuery({ maxWidth: 786 });

    return (
        !isMobile ? <nav className="floating-nav">
            <ul>
                <li><a href="#cover">Home</a></li>
                <li><a href="#about-us">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#ContactUs">Contact Us</a></li>
            </ul>
        </nav> : <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="#">Features</a>
                    <a className="nav-item nav-link" href="#">Pricing</a>
                    <a className="nav-item nav-link disabled" href="#">Disabled</a>
                </div>
            </div>
        </nav>
    )
}
