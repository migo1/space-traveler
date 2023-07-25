import React from 'react';
import './navbar.css';
import {NavLink} from "react-router-dom"

function Navbar() {
  return (
    <div>
      <header>
        <img src="../../assets/planet.png" alt="logo.png" className="logo" />
      </header>
      <nav>
        <NavLink to="/profile"> Profile </NavLink>
        <NavLink to="/rockets"> Rockets</NavLink>
        <NavLink to="/missions"> Missions </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
