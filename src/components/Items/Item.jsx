import React from "react";
import q from "./Item.module.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className={q.item}>
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scroll(0, 0)} src={props.image} alt="img" />
      </Link>
      <p>{props.name}</p>
      <div className={q.itemPrice}>
        <div className={q.itemPriceNew}>${props.newPrice}</div>
        <div className={q.itemPriceOld}>${props.oldPrice}</div>
      </div>
    </div>
  );
};

export default Item;
