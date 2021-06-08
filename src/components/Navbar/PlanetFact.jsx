import React from "react";
import PropTypes from "prop-types";

function PlanetFact({ title, fact }) {
  return (
    <li className='fact'>
      <p>{title.toUpperCase()}</p>
      <p>{fact}</p>
    </li>
  );
}

export default PlanetFact;

PlanetFact.propTypes = {
  title: PropTypes.string,
  fact: PropTypes.string,
};
