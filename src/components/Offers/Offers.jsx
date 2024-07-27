import React from "react";
import q from "./Offers.module.css";
import exclucive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className={q.offers}>
      <div className={q.offersLeft}>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className={q.offersRight}>
        <img src={exclucive_image} alt="exclucive image" />
      </div>
    </div>
  );
};

export default Offers;
