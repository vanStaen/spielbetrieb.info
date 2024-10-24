import React, { useEffect /*, useState */ } from "react";
import { observer } from "mobx-react";
import { DoubleLeftOutlined } from "@ant-design/icons";

// import { Buttons } from "../components/Buttons/Buttons";
import { CarouselElement } from "./CarouselElement/CarouselElement";

import "./Main.less";
import { pageStore } from "../store/pageStore/pageStore";

export const Main = observer(() => {
  // const [showPoints, setShowPoints] = useState(true);

  /* useEffect(() => {
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
  }, [pageStore.selectedCarouselPage]); */

  const hideArrow = () => {
    const elementArrow = document.getElementById("arrow");
    elementArrow.style.display = "none";
  };

  /* const resizeHandler = () => {
    const windowInnerWidth = window.innerWidth;
    if (windowInnerWidth > 725) {
      setShowPoints(true);
    } else {
      setShowPoints(false);
    }
  }; */

  useEffect(() => {
    // resizeHandler();
    document.addEventListener("scroll", hideArrow);
    // window.addEventListener("resize", resizeHandler);
    return () => {
      document.removeEventListener("scroll", hideArrow);
      // document.removeEventListener("resize", resizeHandler);
    };
  }, [hideArrow]); // resizeHandler

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
        {/* <Buttons color="rgba(200,200,200,1)" numPages={3} /> */}
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
        {/* showPoints && (
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
        ) */}
      </div>
    </>
  );
});
