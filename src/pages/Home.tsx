import React from 'react';
import { Cover } from '../Sections/Cover';
import { AboutUs } from '../Sections/AboutUs';
import { OurServices } from '../Sections/OurServices';
import { NavBar } from '../Sections/NavBar';
import { ContactUs } from '../Sections/ContactUs';
import { MobileDrawer } from '../components/MobileDrawer';
import { Clients } from '../Sections/Clients';


export const Home = () => {
    return (
        <>
            <NavBar />
            <Cover />
            <AboutUs />
            <Clients />
            <OurServices />
            <ContactUs />
        </>
    )
}
