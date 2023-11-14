import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="bg-dark text-white">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link to="/" className="navbar-brand">
            <img
              src={"../img/logo.png"}
              alt="Logo Tienda Mueble Online"
              className="logo-icon"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <NavLink to="categoria/1" className="nav-link">
                  Sillas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="categoria/2" className="nav-link">
                  Mesas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="categoria/3" className="nav-link">
                  Escritorios
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
