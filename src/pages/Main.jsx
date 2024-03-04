import React from 'react';
import { Tooltip } from "antd";
import { useTranslation } from "react-i18next";

import EmailLogo from "../img/logos/emailLogo.png";

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
                Spielbetrieb ist ein ganzheitliches, sexpositives Erlebnis. Wir sind eine Digital-Agentur spezialisiert auf Kommunikation, PR, Eventmanagement sowie Daten- & Jugendschutz.

            Zu unseren Leistungen gehören:

                - PR & Kommunikation: Wir stehen unseren Partnern beratend zur Seite und übernehmen auch die komplette Kommunikation.

                - Marketing & Werbung: Von online Werbung bis hin zu Streuartikel haben wir deine Marke im Griff.

                - Daten- & Jugendschutz: Wir kümmern uns darum, damit du ruhig schlafen kannst.

            Zusätzlich bieten wir Live-Events und Eventmanagement an:

                - Einlasskontrolle: ein erfahrenes Team an deiner Tür.
                - Spielmöbel: miete, einzelne Spielmöbel oder ganze Pop-up Dungeons.
                - DJs: die passende Musik für deine Party.

            Unsere Events

                - Damenwahl - FemDom Spieleabend
                - Happy Fisting Club - Anale Liebe, von soft bis extrem
                - Harness Madness - Hedonist*innen im Harness
            </div>
        </div>
        </>
    )
}