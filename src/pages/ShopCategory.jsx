import React, { useContext } from "react";
import q from "./ShopCategory.module.css";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import Item from "../components/Items/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className={q.shopCategory}>
      <img className={q.banner} src={props.banner} />
      <div className={q.indexSort}>
        <p>
          <span>Showing 1-12</span> out of 36
        </p>
        <div className={q.sort}>
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className={q.products}>
        {all_product
          .filter((item) => item.category === props.category)
          .map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              newPrice={item.newPrice}
              oldPrice={item.oldPrice}
            />
          ))}
      </div>
      <div className={q.loadMore}>Explore More</div>
    </div>
  );
};

export default ShopCategory;
