import React from "react";

import Navbar from "./components/Navbar/Navbar";

import data from "./data.json";

function App() {
  return (
    <div className='App'>
      <Navbar data={data} />
    </div>
  );
}

export default App;
