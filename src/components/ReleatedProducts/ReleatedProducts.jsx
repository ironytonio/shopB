import React from "react";
import q from "./ReleatedProducts.module.css";
import data_product from "../Assets/data";
import Item from "../Items/Item";

const ReleatedProducts = () => {
  return (
    <div className={q.releatedProducts}>
      <h1>Related Products</h1>
      <hr />
      <div className={q.item}>
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              newPrice={item.newPrice}
              oldPrice={item.oldPrice}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ReleatedProducts;
