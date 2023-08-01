import React from 'react';
import { Cover } from '../Sections/Cover';
import './Home.css';
import { AboutUs } from '../Sections/AboutUs';
import { OurServices } from '../Sections/OurServices';


export const Home = () => {
    return (
        <>
            <Cover />
            <AboutUs />
            <OurServices />
        </>
    )
}
