import PropTypes from "prop-types";

import chevron from "../../assets/icon-chevron.svg";

function NavItem({ name, setPlanet }) {
  const clickHandler = () => {
    setPlanet(name.toLowerCase());
  };

  return (
    <li className='nav-item' onClick={clickHandler}>
      <div
        style={{
          width: "1.5em",
          height: "1.5em",
          borderRadius: "100%",
          backgroundColor: `var(--clr-${name.toLowerCase()})`,
        }}
      ></div>
      <h3>{name.toUpperCase()}</h3>
      <img src={chevron} alt='chevron indicator' width='10px' />
    </li>
  );
}

export default NavItem;

NavItem.propTypes = {
  name: PropTypes.string,
  setPlanet: PropTypes.func,
};
