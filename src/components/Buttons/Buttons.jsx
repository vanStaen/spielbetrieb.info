import React, { useEffect, useRef, useState } from "react";
import { pageStore } from "../../store/pageStore/pageStore";

import "./Buttons.less";

export const Buttons = (props) => {
  const throttling = useRef(false);
  const [showArrows, setShowArrows] = useState(true);

  const keyDownHandler = (event) => {
    // event.preventDefault();
    const keyPressed = event.key.toLowerCase();
    if (throttling.current === false) {
      throttling.current = true;
      if (keyPressed === "arrowright") {
        if (pageStore.selectedCarouselPage < 3) {
          const element = document.getElementById("arrowRight");
          element.classList.add("active");
          setTimeout(() => {
            pageStore.setCarouselNext();
            element.classList.remove("active");
          }, 500);
        }
      } else if (keyPressed === "arrowleft") {
        if (pageStore.selectedCarouselPage > 1) {
          const element = document.getElementById("arrowLeft");
          element.classList.add("active");
          setTimeout(() => {
            pageStore.setCarouselPrevious();
            element.classList.remove("active");
          }, 500);
        }
      }
      setTimeout(() => {
        throttling.current = false;
      }, 1000);
    }
  };

  const resizeHandler = () => {
    const windowInnerWidth = window.innerWidth;
    if (windowInnerWidth > 840) {
      setShowArrows(true);
    } else {
      setShowArrows(false);
    }
  };

  useEffect(() => {
    resizeHandler();
    document.addEventListener("keydown", keyDownHandler);
    window.addEventListener("resize", resizeHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
      document.removeEventListener("resize", resizeHandler);
    };
  }, [keyDownHandler, resizeHandler]);

  useEffect(() => {
    if (props.color) {
      document
        .querySelector(":root")
        .style.setProperty("--organic-arrow-color", props.color);
    }
  }, [props.color]);

  const handleControlClick = (elementId) => {
    if (throttling.current === false) {
      throttling.current = true;
      const element = document.getElementById(elementId);
      element.classList.add("active");
      setTimeout(() => {
        if (elementId === "arrowRight") {
          pageStore.setCarouselNext();
        } else if (elementId === "arrowLeft") {
          pageStore.setCarouselPrevious();
        }
        element.classList.remove("active");
      }, 500);
      setTimeout(() => {
        throttling.current = false;
      }, 1000);
    }
  };

  return (
    <>
      <div className="controls">
        {pageStore.selectedCarouselPage > 1 && showArrows && (
          <div className="prev" onClick={() => handleControlClick("arrowLeft")}>
            <span id="arrowLeft" className="arrowLeft" />
          </div>
        )}
        {pageStore.selectedCarouselPage < 3 && showArrows && (
          <div
            className="next"
            onClick={() => handleControlClick("arrowRight")}
          >
            <span id="arrowRight" className="arrowRight" />
          </div>
        )}
      </div>
    </>
  );
};
