import React from "react";
import { useTranslation } from "react-i18next";

import pr from "../../img/logos/pr.png";
import marketing from "../../img/logos/marketing.png";
import data from "../../img/logos/data.png";
import dj from "../../img/logos/dj.png";
import chair from "../../img/logos/chair.png";
import party from "../../img/logos/party.png";
import fist from "../../img/logos/fist.png";
import queen from "../../img/logos/queen.png";
import harness from "../../img/logos/harness.png";

import "./CarouselElement.less";

export const CarouselElement = (props) => {
  const { id } = props;

  const { t } = useTranslation();

  if (id === 1) {
    return (
      <div className="main__element">
        <div className="title">Zu unseren Leistungen gehören</div>
        <div className="bulle">
          <div className="imgcontainer">
            <img src={pr} style={{ width: 100 }} />
          </div>
          <div className="textcontainer">
            <div className="textcontainertitle">PR & Kommunikation</div>
            Wir stehen unseren Partnern beratend zur Seite und übernehmen auch
            die komplette Kommunikation.
          </div>
        </div>
        <div className="bulle">
          <div className="imgcontainer">
            <img src={marketing} style={{ width: 100 }} />
          </div>
          <div className="textcontainer">
            <div className="textcontainertitle">Marketing & Werbung</div>
            Von online Werbung bis hin zu Streuartikel haben wir deine Marke im
            Griff
          </div>
        </div>
        <div className="bulle">
          <div className="imgcontainer">
            <img src={data} style={{ width: 100 }} />
          </div>
          <div className="textcontainer">
            <div className="textcontainertitle">Daten- & Jugendschutz</div>
            Wir kümmern uns darum, damit du ruhig schlafen kannst
          </div>
        </div>
      </div>
    );
  } else if (id === 2) {
    return (
      <div className="main__element">
        <div className="title">
          Zusätzlich bieten wir Live-Events und Eventmanagement an
        </div>
        <div className="bulle">
          <div className="imgcontainer">
            <img src={party} style={{ width: 100 }} />
          </div>
          <div className="textcontainer">
            <div className="textcontainertitle">Einlasskontrolle</div>
            Ein erfahrenes Team an deiner Tür
          </div>
        </div>
        <div className="bulle">
          <div className="imgcontainer">
            <img src={chair} style={{ width: 100 }} />
          </div>
          <div className="textcontainer">
            <div className="textcontainertitle">Spielmöbel</div>
            Miete, einzelne Spielmöbel oder ganze Pop-up Dungeons
          </div>
        </div>
        <div className="bulle">
          <div className="imgcontainer">
            <img src={dj} style={{ width: 100 }} />
          </div>
          <div className="textcontainer">
            <div className="textcontainertitle">DJ</div>
            Die passende Musik für deine Party
          </div>
        </div>
      </div>
    );
  } else if (id === 3) {
    return (
      <div className="main__element">
        <div className="title">Unsere Events</div>
        <div className="bulle">
          <div className="imgcontainer">
            <img src={queen} style={{ width: 100 }} />
          </div>
          <div className="textcontainer">
            <div className="textcontainertitle">Damenwahl</div>
            FemDom Spieleabend
          </div>
        </div>
        <div className="bulle">
          <div className="imgcontainer">
            <img src={fist} style={{ width: 100 }} />
          </div>
          <div className="textcontainer">
            <div className="textcontainertitle">Fisting Club</div>
            Anale Liebe, von soft bis extrem
          </div>
        </div>
        <div className="bulle">
          <div className="imgcontainer">
            <img src={harness} style={{ width: 100 }} />
          </div>
          <div className="textcontainer">
            <div className="textcontainertitle">Harness Madness</div>
            Hedonist*innen im Harness
          </div>
        </div>
      </div>
    );
  }
};
