import React from "react";
import q from "./Popular.module.css";
import data_product from "../Assets/data";
import Item from "../Items/Item";

const Popular = () => {
  return (
    <div className={q.popular}>
      <h1>POPULAR IN WOMAN</h1>
      <hr />
      <div className={q.popularItem}>
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

export default Popular;
