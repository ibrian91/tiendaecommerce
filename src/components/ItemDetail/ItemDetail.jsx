import React from "react";
import "./ItemDetail.css";
import Contador from "../Contador/Contador";
import { Link } from "react-router-dom";
import { useState } from "react";

import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";

// hacer carrito Context
// hacer el use Context -- linea 13 uso del useContext

// linea 40 hacer el ruteo al carrito en app.jsx
// ahora segun linea 41 me voy a trabajar al contador.

const ItemDetail = ({ id, nombre, stock, precio, img }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlCarrito } = useContext(CarritoContext);

  // función para manejar la cantidad:

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
  };

  return (
    <div className="contenedorItem">
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: {precio}</h3>
      <h3>ID: {id}</h3>
      <img src={img} alt={nombre} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque rerum,
        autem doloremque, aperiam in minus neque est dolores ipsa esse mollitia
        dicta asperiores atque quae similique unde aspernatur repellat. Placeat?
      </p>

      {
        //Acá empleamos la lógica de montaje y desmontaje del contador
      }

      {agregarCantidad > 0 ? (
        <Link to="/cart">Terminar Compra</Link>
      ) : (
        <Contador
          inicial={1}
          stock={stock}
          funcionAgregar={manejadorCantidad}
        />
      )}
    </div>
  );
};

export default ItemDetail;
