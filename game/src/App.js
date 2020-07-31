import React from "react";
import "./sass/App.scss";

import Welcome from "./components/Welcome";
import Grid from "./components/Grid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main-container">
      <Welcome />
      <Grid />
      <Footer/>
    </div>
  );
}

export default App;
