import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ productos }) => {
  return (
    <ul className="image-list">
      {productos.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </ul>
  );
};

export default ItemList;
