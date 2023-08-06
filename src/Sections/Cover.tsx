import React from 'react';
import './sections.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMediaQuery } from 'react-responsive';


export const Cover = () => {
    const coberLink: string = 'https://i.imgur.com/G0iaEMO.png';
    const isMobile = useMediaQuery({ maxWidth: 786 });
    return (
        <div className={isMobile ? 'cover-mobile' : 'cover-web'} id="cover">
            <img src={coberLink} className='img-fluid' />
        </div>
    )
}
