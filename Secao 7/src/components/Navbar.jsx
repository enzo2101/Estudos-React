import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/* Utilizando o <Link> ao invés do <a>, você irá redirecionar sem recarregar a página */}
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/">Home</Link>
      <Link to="/">Home</Link>
    </nav>
  );
};

export default Navbar;
