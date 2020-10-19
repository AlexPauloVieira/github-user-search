import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => (
  <nav className='navbar'>
    <header className='header'>
      <Link to='/'>
        <h1 className='title'>Bootcamp DevSuperior</h1>
      </Link>
    </header>
  </nav>
);

export default Header;
