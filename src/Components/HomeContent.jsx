import JxCatalog from "../images/johnnie x catalog.png";
import JxHome from "../images/johnnie x home.png";
import TsrOriginal from "../images/tsr original home.png";
import { useState, useEffect } from "react";

export const HomeContent = () => {
  const images = [
    { src: TsrOriginal, alt: "tsr original", id: 1 },
    { src: JxHome, alt: "johnnie x home", id: 2 },
    { src: JxCatalog, alt: "johnnie x catalog", id: 3 },
  ];

  const brMSG = `to those pursuing a passion unapologetically,\n{the creatives, the dreamers}.`;

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const images = [
      { src: TsrOriginal, alt: "tsr original", id: 1 },
      { src: JxHome, alt: "johnnie x home", id: 2 },
      { src: JxCatalog, alt: "johnnie x catalog", id: 3 },
    ];

    const timer = setInterval(() => {
      if (current < images.length - 1) {
        setCurrent((current) => current + 1);
      } else {
        setCurrent(0);
      }
    }, 6000);

    return () => clearInterval(timer);
  }, [current]);

  const [fader, setFader] = useState({ fade: "fade-in" });

  useEffect(() => {
    const fading = setInterval(() => {
      fader.fade === "fade-in"
        ? setFader({ fade: "fade-out" })
        : setFader({ fade: "fade-in" });
    }, 3000);

    return () => clearInterval(fading);
  }, [fader]);

  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 500);
  }, []);

  return (
    <div className="home-content">
      <div className="home-content-img">
        <div className="home-content-img-container">
          <img
            src={images[current].src}
            alt={images[current].alt}
            key={images[current].id}
            className={`img-iterate ${fader.fade}`}
            style={{ display: display ? "inline-block" : "none" }}
          />
        </div>
      </div>
      <div className="home-content-text">
        <p>{brMSG}</p>
      </div>
    </div>
  );
};
