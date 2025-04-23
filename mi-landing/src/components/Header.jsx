import React from "react";
import { Link } from "react-router-dom";
import "../components/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">✨ Mi Landing React</h1>
        <nav className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/login">Iniciar Sesión</Link>
          <Link to="/register">Registrarse</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;


