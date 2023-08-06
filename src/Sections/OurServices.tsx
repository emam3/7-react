import React from 'react';
import { useMediaQuery } from 'react-responsive';

const services = [
    {
        image: 'https://i.imgur.com/fLSHRPi.png',
        text: 'SEO, Search Engine Optimization'
    },
    {
        image: 'https://i.imgur.com/i6UcDha.png',
        text: 'Identity (Re branding)'
    },
    {
        image: 'https://i.imgur.com/jP8CdW2.png',
        text: 'Guideline for shooting before & after cases'
    },
    {
        image: 'https://i.imgur.com/H6QABKg.png',
        text: 'Branding'
    },
    {
        image: 'https://i.imgur.com/D992eO5.png',
        text: 'Identity inside branches'
    },
    {
        image: 'https://i.imgur.com/doDXUKd.png',
        text: 'Growth of sales'
    },
    {
        image: 'https://i.imgur.com/uU83wR4.png',
        text: 'Paid media'
    },
    {
        image: 'https://i.imgur.com/jkrMg7p.png',
        text: 'E-mail campaigns'
    },
    {
        image: 'https://i.imgur.com/iiYpCJs.png',
        text: 'Sonic brand'
    },
    {
        image: 'https://i.imgur.com/2uaGVO7.png',
        text: 'Content creation'
    },
    {
        image: 'https://i.imgur.com/UyujqKq.png',
        text: 'Growth of sales'
    },
    {
        image: 'https://i.imgur.com/6sRCUfO.png',
        text: 'Annual plan for marketing campaigns'
    },
    {
        image: 'https://i.imgur.com/0k5MCFC.png',
        text: 'Google Ads'
    },
    {
        image: 'https://i.imgur.com/ns4EBp2.png',
        text: 'Animation videos'
    },
    {
        image: 'https://i.imgur.com/PnKzVmq.png',
        text: 'Website development'
    }
]
export const OurServices = (): JSX.Element => {
    const isMobile = useMediaQuery({ maxWidth: 786 });
    return (
        <div id='services' className={isMobile ? 'ourServices-mobile' : 'ourServices'}>
            <h3>What we will offer :</h3>

            <div className="container offers">
                <div className="row no-gutters">
                    {
                        services.map((service: any, index: number) => {
                            return (
                                <div className="col-sm-5 services no-gutters">
                                    <img className='service-img' width={'40px'} height={'40px'} src={service.image} />
                                    <p className='regular'>{service.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
