import React from 'react';
import { useMediaQuery } from 'react-responsive';

const services = [
    {
        image: 'https://i.imgur.com/fLSHRPi.png',
        text: 'SEO, Search Engine Optimization'
    },
    {
        image: 'https://i.imgur.com/OEKBiqd.png',
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
            <h3 className='offers-header'>What we will offer :</h3>

            <div className="container">
                
                <div className="row no-gutters mobile-service">
                    <div style={{alignItems: 'start'}} className="col-sm-5 col-5 services">
                        <img className='service-img' width={'40px'} height={'40px'} src={services[0].image} />
                        <p style={{fontSize:isMobile? '12px' : '1em' }} className='regular'>{services[0].text}</p>
                    </div>

                    <div style={{alignItems: 'center'}} className="col-sm-5 col-5 services">
                        <img className='service-img' width={'40px'} height={'40px'} src={services[1].image} />
                        <p style={{fontSize:isMobile? '12px' : '1em' }} className='regular'>{services[1].text}</p>
                    </div>
                </div>


                <div className="row no-gutters mobile-service">
                    <div className="col-sm-5 col-5 services">
                        <img className='service-img' width={'40px'} height={'40px'} src={services[2].image} />
                        <p style={{fontSize:isMobile? '12px' : '1em' }} className='regular'>{services[2].text}</p>
                    </div>

                    <div className="col-sm-5 col-5 services">
                        <img className='service-img' width={'40px'} height={'40px'} src={services[3].image} />
                        <p style={{fontSize:isMobile? '12px' : '1em' }} className='regular'>{services[3].text}</p>
                    </div>
                </div>

                <div className="row no-gutters mobile-service">
                    <div className="col-sm-5 col-5 services">
                        <img className='service-img' width={'40px'} height={'40px'} src={services[4].image} />
                        <p style={{fontSize:isMobile? '12px' : '1em' }} className='regular'>{services[4].text}</p>
                    </div>

                    <div className="col-sm-5 col-5 services">
                        <img className='service-img' width={'40px'} height={'40px'} src={services[5].image} />
                        <p style={{fontSize:isMobile? '12px' : '1em' }} className='regular'>{services[5].text}</p>
                    </div>
                </div>

                <div className="row no-gutters mobile-service">
                    <div className="col-sm-5 col-5 services">
                        <img className='service-img' width={'40px'} height={'40px'} src={services[6].image} />
                        <p style={{fontSize:isMobile? '12px' : '1em' }} className='regular'>{services[6].text}</p>
                    </div>

                    <div className="col-sm-5 col-5 services">
                        <img className='service-img' width={'40px'} height={'40px'} src={services[7].image} />
                        <p style={{fontSize:isMobile? '12px' : '1em' }} className='regular'>{services[7].text}</p>
                    </div>
                </div>

                <div className="row no-gutters mobile-service">
                    <div className="col-sm-5 col-5 services">
                        <img className='service-img' width={'40px'} height={'40px'} src={services[8].image} />
                        <p style={{fontSize:isMobile? '12px' : '1em' }} className='regular'>{services[8].text}</p>
                    </div>

                    <div className="col-sm-5 col-5 services">
                        <img className='service-img' width={'40px'} height={'40px'} src={services[9].image} />
                        <p style={{fontSize:isMobile? '12px' : '1em' }} className='regular'>{services[9].text}</p>
                    </div>
                </div>

                <div className="row no-gutters mobile-service">
                    <div className="col-sm-5 col-5 services">
                        <img className='service-img' width={'40px'} height={'40px'} src={services[10].image} />
                        <p style={{fontSize:isMobile? '12px' : '1em' }} className='regular'>{services[10].text}</p>
                    </div>

                    <div className="col-sm-5 col-5 services">
                        <img className='service-img' width={'40px'} height={'40px'} src={services[11].image} />
                        <p style={{fontSize:isMobile? '12px' : '1em' }} className='regular'>{services[11].text}</p>
                    </div>
                </div>

                <div className="row no-gutters mobile-service">
                    <div className="col-sm-5 col-5 services">
                        <img className='service-img' width={'40px'} height={'40px'} src={services[12].image} />
                        <p style={{fontSize:isMobile? '12px' : '1em' }} className='regular'>{services[12].text}</p>
                    </div>

                    <div className="col-sm-5 col-5 services">
                        <img className='service-img' width={'40px'} height={'40px'} src={services[13].image} />
                        <p style={{fontSize:isMobile? '12px' : '1em' }} className='regular'>{services[13].text}</p>
                    </div>
                </div>

                <div className="row no-gutters mobile-service">
                    <div className="col-sm-5 col-5 services">
                        <img className='service-img' width={'40px'} height={'40px'} src={services[14].image} />
                        <p style={{fontSize:isMobile? '12px' : '1em' }} className='regular'>{services[14].text}</p>
                    </div>

                    <div className="col-sm-5 col-5 services">
                        {/* <img className='service-img' width={'40px'} height={'40px'} src={services[14].image} />
                        <p style={{fontSize:isMobile? '12px' : '1em' }} className='regular'>{services[14].text}</p> */}
                    </div>
                </div>
                
            </div>
        </div>
    )
}
