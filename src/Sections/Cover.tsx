import React from 'react';
import './sections.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMediaQuery } from 'react-responsive';


export const Cover = () => {
    const coverLink: string = 'https://i.imgur.com/35bHmZE.png';
    const isMobile = useMediaQuery({ maxWidth: 786 });
    return (
        <div className={isMobile ? 'cover-mobile' : 'cover-web'} id="cover">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12" style={{ visibility: 'hidden' }}>a</div>
                    <div className="col-xs-12" style={{ visibility: 'hidden' }}>a</div>
                    <div className="col-xs-12" style={{ visibility: 'hidden' }}>a</div>

                </div>
                <div className="row">
                    <div className="col-xs-2">
                        <img src={coverLink} width={'50%'} />
                    </div>

                    <div className="row">
                        <div className="col-xs-12" style={{visibility: "hidden"}}>a</div>
                        <div className="col-xs-12" style={{ visibility: 'hidden' }}>a</div>
                        <div className="col-xs-12" style={{ visibility: 'hidden' }}>a</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
