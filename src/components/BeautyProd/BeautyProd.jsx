import React from "react";
import q from "./BeautyProd.module.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const BeautyProd = (props) => {
  const { product } = props; //const product = props.product
  return (
    <div className={q.beatyProd}>
      Home <img src={arrow_icon} alt="Bananatiger" /> Shop{" "}
      <img src={arrow_icon} alt="Bananatiger" /> {product.category}{" "}
      <img src={arrow_icon} alt="Bananatiger" />
      {product.name}
    </div>
  );
};

export default BeautyProd;
