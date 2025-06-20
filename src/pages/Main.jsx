import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { DoubleLeftOutlined } from "@ant-design/icons";

import { Buttons } from "../components/Buttons/Buttons";
import { BulleCarousel } from "./BulleCarousel/BulleCarousel";
import { pageStore } from "../store/pageStore/pageStore";

import "./Main.less";

export const Main = observer(() => {
  const [showPoints, setShowPoints] = useState(true);

  useEffect(() => {
    const allPoints = document.getElementsByClassName("point");
    allPoints[0].style.width = "10px";
    allPoints[0].style.backgroundColor = "rgba(255,255,255,.75)";
    allPoints[1].style.width = "10px";
    allPoints[1].style.backgroundColor = "rgba(255,255,255,.75)";
    allPoints[2].style.width = "10px";
    allPoints[2].style.backgroundColor = "rgba(255,255,255,.75)";
    const selectedPoint = document.getElementById(
      `point${pageStore.selectedCarouselPage}`,
    );
    selectedPoint.style.width = "30px";
    selectedPoint.style.backgroundColor = "rgba(255,255,255,1)";
  }, [pageStore.selectedCarouselPage]);

  const scrollingBehavior = () => {
    const hasScrollDownMorethan25percent = window.scrollY > (window.innerHeight / 4)

    if (hasScrollDownMorethan25percent) {
      const elementArrow = document.getElementById("arrow");
      elementArrow.style.display = "none";
      const elementMore = document.getElementById("more");
      elementMore.style.display = "none";
    } else if (window.scrollY < window.innerHeight / 4) {
      const elementArrow = document.getElementById("arrow");
      elementArrow.style.display = "block";
      const elementMore = document.getElementById("more");
      elementMore.style.display = "block";
    }

    const opacityValue = 2 - (window.scrollY / document.body.clientHeight) * 4;

    const elementDesc = document.getElementById("desc");
    elementDesc.style.opacity = opacityValue;
    const elementSubtitle = document.getElementById("subtitle");
    elementSubtitle.style.opacity = opacityValue;

  };

  const resizeHandler = () => {
    const windowInnerWidth = window.innerWidth;
    if (windowInnerWidth > 725) {
      setShowPoints(true);
    } else {
      setShowPoints(false);
    }
  };

  useEffect(() => {
    resizeHandler();
    document.addEventListener("scroll", scrollingBehavior);
    window.addEventListener("resize", resizeHandler);
    return () => {
      document.removeEventListener("scroll", scrollingBehavior);
      document.removeEventListener("resize", resizeHandler);
    };
  }, [scrollingBehavior]); // resizeHandler

  const arrowClickHandler = () => {
    const windowInnerWidth = window.innerWidth;
    if (windowInnerWidth > 675) {
      const elementArrow = document.getElementById("arrow");
      elementArrow.style.display = "none";
    }
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <>
      <div className="background" />
      <div className="main_mehr" onClick={arrowClickHandler} id="more">
        Scroll runter um <br />mehr zu erfähren
      </div>
      <div className="main__doublearrow" id="arrow">
        <DoubleLeftOutlined onClick={arrowClickHandler} />
      </div>
      <div className="main__title">Spielbetrieb</div>
      <div className="main__subtext">love to love</div>
      <br />
      <div className="main__subtitle" id="subtitle">Agentur für Erotika und Entertainment</div>
      <div className="main__desc" id="desc">
        Wir sind Spielbetrieb – eine kreative Web- und Kommunikationsagentur mit Sitz in Berlin und einem klaren Fokus: Wir entwickeln digitale Räume, strategische Kommunikation und visuelle Identitäten für mutige Marken, visionäre Unternehmer*innen und kreative Szenen. Unsere Stärke liegt in der Verbindung von Ästhetik, Strategie und Community – immer mit Haltung, oft mit Eigensinn, niemals von der Stange.
      </div>
      <div className="main__containerNext">
        <Buttons color="rgba(200,200,200,1)" numPages={3} />
        <div className="desc">
          <div style={{ color: "rgba(255,255,255,1)", marginBottom: 10 }}>
            Spielbetrieb ist ein ganzheitliches, sexpositives Erlebnis:
          </div>
          <span style={{ fontWeight: 500 }}>
            Eine Digital-Agentur spezialisiert auf Kommunikation, PR,
            Eventmanagement sowie Datenschutz.
          </span>
        </div>
        <BulleCarousel id={pageStore.selectedCarouselPage} />
        {showPoints && (
          <div className="carouselPoints">
            <div
              id="point1"
              className="point point1"
              onClick={() => pageStore.setSelectedCarouselPage(1)}
            ></div>
            <div
              id="point2"
              className="point point2"
              onClick={() => pageStore.setSelectedCarouselPage(2)}
            ></div>
            <div
              id="point3"
              className="point point3"
              onClick={() => pageStore.setSelectedCarouselPage(3)}
            ></div>
          </div>
        )}
      </div>
    </>
  );
});
