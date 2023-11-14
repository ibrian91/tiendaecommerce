import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ productos }) => {
  // Dividir los productos en grupos de 5
  const groupedProducts = [];
  for (let i = 0; i < productos.length; i += 5) {
    groupedProducts.push(productos.slice(i, i + 5));
  }

  // Agregar la clase "loaded" cuando los productos se cargan
  const handleLoaded = () => {
    const list = document.querySelector(".image-list");
    if (list) {
      list.classList.add("loaded");
    }
  };

  return (
    <div className="image-list" onLoad={handleLoaded}>
      {groupedProducts.map((itemGroup) => (
        <div key={itemGroup[0].id} className="item-group">
          {itemGroup.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
