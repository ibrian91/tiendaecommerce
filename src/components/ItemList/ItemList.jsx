import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ productos }) => {
  // Dividir los productos en grupos de 5
  const groupedProducts = [];
  for (let i = 0; i < productos.length; i += 5) {
    groupedProducts.push(productos.slice(i, i + 5));
  }

  return (
    <div className="image-list">
      {groupedProducts.map((itemGroup) => (
        <div key={itemGroup[0].id}>
          {itemGroup.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
