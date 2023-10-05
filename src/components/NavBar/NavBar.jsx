import React from "react";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <header
      className="d-flex justify-content-between align-items-center px-4 pb-1"
      style={{ borderBottom: "1px solid #000" }}
    >
      <div className="ml-4">
        <h2>Tienda Muebles Online</h2>
      </div>
      <nav className="d-flex align-items-center">
        <ul className="list-inline mb-0 mr-4">
          <li className="list-inline-item">Sofas</li>
          <li className="list-inline-item">Mesas</li>
          <li className="list-inline-item">Sillas</li>
          <li className="list-inline-item">Camas</li>
          <li className="list-inline-item">Escritorios</li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
