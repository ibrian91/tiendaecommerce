import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, img }) => {
  return (
    <li>
      <div className="item-container">
        <div className="avatar">
          <img src={img} alt={nombre} />
        </div>

        <h3>Nombre: {nombre}</h3>
        <p>Precio:{precio} </p>
        <p>ID:{id} </p>
        <div className="button-container">
          <Link to={`/item/${id}`}> Ver Detalles </Link>
          {/* <button>Ver Detalles</button> */}
        </div>
      </div>
    </li>
  );
};

export default Item;
