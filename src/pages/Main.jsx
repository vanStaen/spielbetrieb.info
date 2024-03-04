import React from 'react';
import { Carousel } from 'antd';
import { useTranslation } from "react-i18next";

import './Main.less';

export const Main = () => {

    const { t } = useTranslation();

    return (
        <>
        <div className='background'></div>
        <div className='main__container'>
            <div className="main__title">Spielbetrieb</div>
            <div className="main__subtext">love to love</div>
            <div className='main__text'>
                Spielbetrieb ist ein ganzheitliches, sexpositives Erlebnis.<br/><br/>
                Wir sind eine Digital-Agentur spezialisiert auf Kommunikation, PR, Eventmanagement sowie Daten- & Jugendschutz.
                    <div className='main__carouselElement'>
                        <div className='main__carouseltitle'>Zu unseren Leistungen gehören</div>
                        <div className='main__carouselSubElement'>PR & Kommunikation: Wir stehen unseren Partnern beratend zur Seite und übernehmen auch die komplette Kommunikation.</div>
                        <div className='main__carouselSubElement'>Marketing & Werbung: Von online Werbung bis hin zu Streuartikel haben wir deine Marke im Griff.</div>
                        <div className='main__carouselSubElement'>Daten- & Jugendschutz: Wir kümmern uns darum, damit du ruhig schlafen kannst.</div>
                    </div>
                    <div className='main__carouselElement'>
                        <div className='main__carouseltitle'>Zusätzlich bieten wir Live-Events und Eventmanagement an</div>
                        <div className='main__carouselSubElement'>Einlasskontrolle: ein erfahrenes Team an deiner Tür.</div>
                        <div className='main__carouselSubElement'>Spielmöbel: miete, einzelne Spielmöbel oder ganze Pop-up Dungeons.</div>
                        <div className='main__carouselSubElement'>DJs: die passende Musik für deine Party.</div>
                    </div>
                    <div className='main__carouselElement'>
                        <div className='main__carouseltitle'>Unsere Events</div>
                        <div className='main__carouselSubElement'>Damenwahl - FemDom Spieleabend</div>
                        <div className='main__carouselSubElement'>Happy Fisting Club - Anale Liebe, von soft bis extrem</div>
                        <div className='main__carouselSubElement'>Harness Madness - Hedonist*innen im Harness</div>
                    </div>
            </div>
        </div>
        </>
    )
}