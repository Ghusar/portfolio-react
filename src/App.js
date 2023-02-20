import React from "react";

import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() { 
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Work />
      <Navbar />
    </div>
  );
}
export default App;