import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <header>
        <img src="../../assets/planet.png" alt="logo.png" className="logo" />
      </header>
      <nav>
        <NavLink to="/"> Rockets</NavLink>
        <NavLink to="/missions"> Missions </NavLink>
        <NavLink to="/profile"> Profile </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
