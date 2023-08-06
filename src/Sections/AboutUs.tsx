import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

export const AboutUs = () => {
    const shebak: string = 'https://i.imgur.com/CbQkpLh.png';
    const isMobile = useMediaQuery({ maxWidth: 786 });

    return (
        <div id='about-us' className={isMobile ? 'aboutUs-mobile container-fluid' : 'aboutUs-web container-fluid'} >
            <div className="row no-gutters no-gutters about-us-justify">

                <div className="col-lg-1"></div>

                <div className="col-lg-5 col-md-3 col-xs-12">
                    <img src={shebak} className={isMobile ? 'img-fluid' : ''} />
                </div>

                <div className="col-lg-1"></div>

                <div className="col-lg-4 col-md-3 col-xs-12 about-us-text">
                    <h1 className='h1'>About us</h1>
                    <p className='regular clearfix'>
                        Your steps that start with us are going in a scientific and
                        modern way to make you implement the marketing mix to be 
                        your steps to success closer and make you in the top.</p>
                    <p className='bold'>WE 7PS ARE PARTNER OF SUCCESS</p>
                </div>

            </div>
        </div>
    )
}
