import React from "react";

import Navbar from "./components/Navbar/Navbar";

import data from "./data.json";

function App() {
  console.log(data);
  return (
    <div className='App'>
      <Navbar />
    </div>
  );
}

export default App;
