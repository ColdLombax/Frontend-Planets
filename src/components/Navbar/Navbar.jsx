import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";

import hamburger from "../../assets/icon-hamburger.svg";

function Navbar({ data }) {
  const [isActive, setIsActive] = useState(true);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <nav className='navbar'>
      <h1>THE PLANETS</h1>
      <img src={hamburger} alt='menu toggle' onClick={toggleMenu} />
      {isActive && (
        <motion.div className='dropdown'>
          <p>Hello</p>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;

Navbar.propTypes = {
  data: PropTypes.array,
};
