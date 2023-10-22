import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <div className="contenedorItem">
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: {precio}</h3>
      <h3>ID: {id}</h3>
      <img className="img" src={img} alt={nombre} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque rerum,
        autem doloremque, aperiam in minus neque est dolores ipsa esse mollitia
        dicta asperiores atque quae similique unde aspernatur repellat. Placeat?
      </p>
    </div>
  );
};

export default ItemDetail;
