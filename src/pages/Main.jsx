import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { DoubleLeftOutlined } from "@ant-design/icons";

import { Buttons } from "../components/Buttons/Buttons";
import { CarouselElement } from "./CarouselElement/CarouselElement";

import "./Main.less";
import { pageStore } from "../store/pageStore/pageStore";

export const Main = observer(() => {
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

  const hideArrow = () => {
    const elementArrow = document.getElementById("arrow");
    elementArrow.style.display = "none";
  };

  useEffect(() => {
    document.addEventListener("scroll", hideArrow);
    return () => {
      document.removeEventListener("scroll", hideArrow);
    };
  }, [hideArrow]);

  const arrowClickHandler = () => {
    /* const windowInnerWidth = window.innerWidth;
        if (windowInnerWidth > 675) {
          elementArrow.style.display = "none";
        } */
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    hideArrow();
  };

  return (
    <>
      <div className="background" />
      <div className="main__doublearrow" id="arrow">
        <DoubleLeftOutlined onClick={arrowClickHandler} />
      </div>
      <div className="main__title">Spielbetrieb</div>
      <div className="main__subtext">love to love</div>
      <div className="main__containerNext">
        <Buttons color="rgba(200,200,200,1)" numPages={3} />
        <div className="desc">
          <div style={{ color: "rgba(255,255,255,1)", marginBottom: 10 }}>
            Spielbetrieb ist ein ganzheitliches, sexpositives Erlebnis:
          </div>
          <span style={{ fontWeight: 500 }}>
            Eine Digital-Agentur spezialisiert auf Kommunikation, PR,
            Eventmanagement sowie Daten- & Jugendschutz.
          </span>
        </div>
        <CarouselElement id={pageStore.selectedCarouselPage} />
        <div className="carouselPoints">
          <div id="point1" className="point point1"></div>
          <div id="point2" className="point point2"></div>
          <div id="point3" className="point point3"></div>
        </div>
      </div>
    </>
  );
});
