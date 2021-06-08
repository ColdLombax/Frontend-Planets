import React, { useEffect } from "react";
import PropTypes from "prop-types";

function DetailsNav({ name }) {
  useEffect(() => {}, [name]);

  return (
    <ul className='details-nav-list'>
      <li className={`details-item ${name}`}>OVERVIEW</li>
      <li className={`details-item ${name}`}>STRUCTURE</li>
      <li className={`details-item ${name}`}>SURFACE</li>
    </ul>
  );
}

export default DetailsNav;

DetailsNav.propTypes = {
  name: PropTypes.string,
};
