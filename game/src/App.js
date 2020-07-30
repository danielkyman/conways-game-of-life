import React, { useState, useCallback, useRef } from "react";
import produce from "immer";
import "./sass/App.scss";

import Welcome from "./components/Welcome";
import Grid from "./components/Grid";

function App() {
  return (
    <div className="main-container">
      <Welcome />
      <Grid />
    </div>
  );
}

export default App;
