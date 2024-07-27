import React, { useContext } from "react";
import q from "./ProductDisplay.module.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { useState } from "react";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const [randomNumber, setRandomNumber] = useState(getRandomNumber());
  function getRandomNumber() {
    return Math.floor(Math.random() * 200) + 1;
  }

  return (
    <div className={q.productDisplay}>
      <div className={q.left}>
        <div className={q.imgList}>
          <img src={product.image} alt="lazaret" />
          <img src={product.image} alt="lazaret" />
          <img src={product.image} alt="lazaret" />
          <img src={product.image} alt="lazaret" />
        </div>
        <div className={q.displayImg}>
          <img className={q.mainImg} src={product.image} alt="lazaret" />
        </div>
      </div>
      <div className={q.right}>
        <h1>{product.name}</h1>
        <div className={q.rightStar}>
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_dull_icon} alt="hehe" />
          <p>({getRandomNumber()})</p>
        </div>
        <div className={q.rightPrice}>
          <div className={q.rightPriceOld}>${product.oldPrice}</div>
          <div className={q.rightPriceNew}>${product.newPrice}</div>
        </div>
        <h1>Select Size</h1>
        <div className={q.rightSize}>
          <div className={q.size}>S</div>
          <div className={q.size}>M</div>
          <div className={q.size}>L</div>
          <div className={q.size}>XL</div>
          <div className={q.size}>XXL</div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p classname={q.rightCategory}>
          {" "}
          <span className={q.name}>Category :</span> {product.category}
        </p>
        <p classname={q.rightCategory}>
          {" "}
          <span className={q.name}>Tags :</span> Modern , Tags ,Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
