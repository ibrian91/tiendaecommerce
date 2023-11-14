import React, { useContext, useState, useEffect } from "react";
import "./CartWidget.css";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  const [animationActive, setAnimationActive] = useState(false);
  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/3144/3144456.png";

  useEffect(() => {
    // Activa la animación cada vez que cambia la cantidadTotal
    setAnimationActive(true);

    // Desactiva la animación después de un tiempo (en este caso, 500 ms)
    const timeoutId = setTimeout(() => {
      setAnimationActive(false);
    }, 500);

    // Limpia el timeout para evitar efectos inesperados
    return () => clearTimeout(timeoutId);
  }, [cantidadTotal]);

  return (
    <div className="cart-widget-container">
      <Link to="/cart">
        <img
          className={`imgCarrito ${animationActive ? "bounce" : ""}`}
          src={imgCarrito}
          alt="Carrito de compras"
        />
        {cantidadTotal > 0 && (
          <div className="item-count">
            <strong>{cantidadTotal}</strong>
          </div>
        )}
      </Link>
    </div>
  );
};

export default CartWidget;
