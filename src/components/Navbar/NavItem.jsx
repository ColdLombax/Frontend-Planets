import React from "react";
import PropTypes from "prop-types";

import chevron from "../../assets/icon-chevron.svg";

function NavItem({ name }) {
  return (
    <li>
      <div
        style={{
          backgroundColor: `var(--clr-${name.toLowerCase()})`,
          width: "1.2em",
          height: "1.2em",
          borderRadius: "100%",
          marginRight: "1em",
        }}
      ></div>
      <h3>{name}</h3>
      <img src={chevron} alt='pointer chevron' />
    </li>
  );
}

export default NavItem;

NavItem.propTypes = {
  name: PropTypes.string,
};
