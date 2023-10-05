import React from "react";
import "./CartWidget.css";

const CartWidget = () => {
  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/3144/3144456.png";
  return (
    <div>
      <img className="imgCarrito" src={imgCarrito} alt="Imagen de carrito" />
      <strong>3</strong>
    </div>
  );
};

export default CartWidget;
