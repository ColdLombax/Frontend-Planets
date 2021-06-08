import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import PlanetFact from "./PlanetFact";

function Planet({ currentPlanet, data, activeTab }) {
  // Details
  const [overview, setOverview] = useState("");
  const [overviewSource, setOverviewSource] = useState("");

  // Facts
  const [rotationTime, setRotationTime] = useState("");
  const [revolutionTime, setRevolutionTime] = useState("");
  const [radius, setRadius] = useState("");
  const [avarageTemp, setAvarageTemp] = useState("");

  const getDetails = () => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].name.toLowerCase() === currentPlanet) {
        // Overview Assignment
        if (activeTab === "overview") {
          setOverview(data[i].overview.content);
          setOverviewSource(data[i].overview.source);
        } else if (activeTab === "structure") {
          setOverview(data[i].structure.content);
          setOverviewSource(data[i].structure.source);
        } else if (activeTab === "surface") {
          setOverview(data[i].geology.content);
          setOverviewSource(data[i].geology.source);
        }

        // Fact Assignment
        setRotationTime(data[i].rotation);
        setRevolutionTime(data[i].revolution);
        setRadius(data[i].radius);
        setAvarageTemp(data[i].temperature);
      }
    }
  };

  useEffect(() => {
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPlanet, activeTab]);

  return (
    <div className='planet-container'>
      <div className={`planet ${currentPlanet}-planet`}></div>
      <div className='planet-details'>
        <h2>{currentPlanet.toUpperCase()}</h2>
        <p>{overview}</p>
        <p className='source-link'>
          Source:{" "}
          <a href={overviewSource} target='_blank' rel='noreferrer'>
            Wikipedia
          </a>
        </p>
        <div className='planet-facts'>
          <PlanetFact title='rotation time' fact={rotationTime} />
          <PlanetFact title='revolution time' fact={revolutionTime} />
          <PlanetFact title='radius' fact={radius} />
          <PlanetFact title='avarage temp.' fact={avarageTemp} />
        </div>
      </div>
    </div>
  );
}

export default Planet;

Planet.propTypes = {
  currentPlanet: PropTypes.string,
  data: PropTypes.array,
  activeTab: PropTypes.string,
};
