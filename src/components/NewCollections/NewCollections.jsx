import React from "react";
import q from "./NewCollections.module.css";
import new_collection from "../Assets/new_collections";
import Item from "../Items/Item";

const NewCollections = () => {
  return (
    <div className={q.NewCollections}>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className={q.collections}>
        {new_collection.map((item, i) => {
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

export default NewCollections;
