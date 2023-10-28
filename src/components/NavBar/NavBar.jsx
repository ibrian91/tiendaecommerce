import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <Link to="/" className="navbar-brand">
        <img src={"../img/logo.png"} alt="Logo Tienda Mueble Online" />
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="categoria/1">Sillas</NavLink>
          </li>
          <li>
            <NavLink to="categoria/2">Mesas</NavLink>
          </li>
          <li>
            <NavLink to="categoria/3">Escritorios</NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
