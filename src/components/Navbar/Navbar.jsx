import { useState } from "react";
import PropTypes from "prop-types";

import hamburger from "../../assets/icon-hamburger.svg";
import NavItem from "./NavItem";

function Navbar({ data, setPlanet }) {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const navItems = data.map((planet) => {
    return (
      <NavItem key={planet.name} name={planet.name} setPlanet={setPlanet} />
    );
  });

  return (
    <nav className='navbar'>
      <h1>THE PLANETS</h1>
      <img src={hamburger} alt='menu toggle' onClick={toggleMenu} />
      {isActive && (
        <div className='dropdown'>
          <ul className='nav-items'>{navItems}</ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

Navbar.propTypes = {
  data: PropTypes.array,
  setPlanet: PropTypes.func,
};
