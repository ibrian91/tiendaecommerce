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

        <h3 style={{fontSize:"14px"}}>Nombre: {nombre}</h3>
        <p style={{fontSize:"14px"}}>Precio:{precio} </p>
        <p style={{fontSize:"14px"}}>ID:{id} </p>
        <div className="button-container">
          <Link to={`/item/${id}`} style={{fontSize:"12px"}}> Ver Detalles </Link>
          {/* <button>Ver Detalles</button> */}
        </div>
      </div>
    </li>
  );
};

export default Item;
