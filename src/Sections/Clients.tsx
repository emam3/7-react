import React from 'react';
import './sections.css';


export const Clients = (): JSX.Element => {
    const imgs = [
        'https://i.imgur.com/9FEqBjf.png',
        'https://i.imgur.com/sdebPEP.png',
        'https://i.imgur.com/iFm7i5w.png',
        'https://i.imgur.com/2j91fS5.png',
        'https://i.imgur.com/AT8coba.png',
        'https://i.imgur.com/Ik5GoCr.png',
        'https://i.imgur.com/MeHGN5j.png',
        'https://i.imgur.com/a05Ol0M.png',
        'https://i.imgur.com/PbcxTxK.png',
        'https://i.imgur.com/3s53j6M.png',
        'https://i.imgur.com/I4vbzjl.png'
    ]
  return (
    <div className='clients'>
        <div className="container-fluid">
            <div className="h1 clients-head">Clients</div>

        <div className='clientsImgs'>
            {
                imgs.map(img => <img className='client' style={{paddingLeft:20}} src={img} />)
            }
        </div>
        </div>
        

    </div>
  )
}
