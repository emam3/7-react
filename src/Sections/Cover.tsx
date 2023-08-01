import React from 'react';
import './sections.css';

export const Cover = () => {
    const coberLink: string = 'https://i.imgur.com/tvTiduw.png';
    return (
        <div className='cover'>
            <img src={coberLink} style={{ visibility: 'hidden' }} />
        </div>
    )
}
