import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <Link to="/" className="navbar-brand">
        <img src={"./img/logo.png"} alt="Logo Tienda Mueble Online" />
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">Sillas</Link>
          </li>
          <li>
            <Link to="#">Mesas</Link>
          </li>
          <li>
            <Link to="#">Escritorios</Link>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
