import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          LOGO
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

          <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ¿Que deseas hacer?
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" id="provisiones" to="/">Provisionar</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" id="usos" to="/">Informar Usos</Link></li>
          </ul>
        </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;