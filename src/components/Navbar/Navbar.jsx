import PropTypes from "prop-types";
import { useState } from "react";

import hamburger from "../../assets/icon-hamburger.svg";
import NavItem from "./NavItem";

function Navbar({ data }) {
  const [isActive, setIsActive] = useState(true);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  const navItems = data.map((planet) => {
    return <NavItem key={planet.name} name={planet.name} />;
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
};
