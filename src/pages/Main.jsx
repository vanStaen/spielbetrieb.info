import React from 'react';
import { Carousel } from 'antd';

import { CarouselElement } from './CarouselElement/CarouselElement';

import './Main.less';

export const Main = () => {

    return (
        <>
        <div className='background'/>
        <div className="main__title">Spielbetrieb</div>
        <div className="main__subtext">love to love</div>
        <div className='main__containerNext'>
                <div className='desc'>
                    <div style={{color: 'rgba(255,255,255, .75)', marginBottom: 10}}>Spielbetrieb ist ein ganzheitliches, sexpositives Erlebnis:</div>
                    Eine Digital-Agentur spezialisiert auf Kommunikation, PR, Eventmanagement sowie Daten- & Jugendschutz.
                </div>
                <CarouselElement id={1}/>
            </div>
        </>
    )
}