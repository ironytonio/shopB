import React from "react";
import q from "./Hero.module.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className={q.hero}>
      <div className={q.heroLeft}>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className={q.handIcon}>
            <p>new</p>
            <img src={hand_icon}></img>
          </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>
        <div className={q.latestBtn}>
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow icon" />
        </div>
      </div>
      <div className={q.heroRight}>
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
