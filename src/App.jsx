import React, { useState } from "react";
import DetailsNav from "./components/Navbar/DetailsNav";

import Navbar from "./components/Navbar/Navbar";

import data from "./data.json";

function App() {
  const [currentPlanet, setCurrentPlanet] = useState("mercury");

  return (
    <div className='App'>
      <Navbar data={data} setPlanet={setCurrentPlanet} />
      <section className='details-nav'>
        <DetailsNav name={currentPlanet} />
      </section>
    </div>
  );
}

export default App;
