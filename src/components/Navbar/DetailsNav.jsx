import React, { useEffect } from "react";
import PropTypes from "prop-types";

function DetailsNav({ name, activeTab, setActiveTab }) {
  useEffect(() => {}, [name]);

  const clickHandler = (e) => {
    setActiveTab(e.target.innerHTML.toLowerCase());
  };

  return (
    <ul className='details-nav-list'>
      <li
        className={`details-item ${name} ${
          activeTab === "overview" ? "active" : ""
        }`}
        onClick={clickHandler}
      >
        OVERVIEW
      </li>
      <li
        className={`details-item ${name} ${
          activeTab === "structure" ? "active" : ""
        }`}
        onClick={clickHandler}
      >
        STRUCTURE
      </li>
      <li
        className={`details-item ${name} ${
          activeTab === "surface" ? "active" : ""
        }`}
        onClick={clickHandler}
      >
        SURFACE
      </li>
    </ul>
  );
}

export default DetailsNav;

DetailsNav.propTypes = {
  name: PropTypes.string,
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.func,
};
