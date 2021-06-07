import React, { useState } from "react";
import PropTypes from "prop-types";

import hamburger from "../../assets/icon-hamburger.svg";

import NavItem from "./NavItem";

function Navbar({ data }) {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const navItems = data.map((planet) => {
    return <NavItem key={planet.name} name={planet.name} />;
  });

  const planetNames = data.map((planet) => {
    return <p>{planet.name.toUpperCase()}</p>;
  });

  const dropdownHandler = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  return (
    <nav className='navbar'>
      <h1>THE PLANETS</h1>
      <img src={hamburger} alt='hamburger' onClick={dropdownHandler} />
      {isDropdownActive && (
        <div className='nav-dropdown'>
          <ul>{navItems}</ul>
        </div>
      )}
      <div className='planet-items'>
        <ul>{planetNames}</ul>
      </div>
    </nav>
  );
}

export default Navbar;

Navbar.propTypes = {
  data: PropTypes.array,
};
