import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div className="mx-12 flex justify-between items-center pt-2">
        <header className="flex items-center">
          <img src="../../assets/planet.png" alt="logo.png" className="logo mr-4" />
          <h1 className="text-3xl font-bold">Space Travelers&apos; Hub</h1>
        </header>
        <nav>
          <NavLink to="/" className="pr-8 text-blue-400 text-lg"> Rockets</NavLink>
          <NavLink to="/missions" className="pr-6 border-r-2 border-blue-400 text-blue-400 text-lg"> Missions </NavLink>
          <NavLink to="/profile" className="pr-0 pl-6 text-blue-400 text-lg"> Profile </NavLink>
        </nav>
      </div>
      <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-300 mx-12" />
    </div>

  );
}

export default Navbar;
