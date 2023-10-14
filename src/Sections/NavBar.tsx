import React from 'react';
import './nav.css'
import { useMediaQuery } from 'react-responsive';
import { MobileDrawer } from '../components/MobileDrawer';


export const NavBar = () => {
    const isMobile = useMediaQuery({ maxWidth: 786 });

    return (
        !isMobile ? 
        <nav className="floating-nav">
            <ul>
                <li><a href="#cover">Home</a></li>
                <li><a href="#about-us">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#ContactUs">Contact Us</a></li>
            </ul>
        </nav> : <MobileDrawer />
    )
}
