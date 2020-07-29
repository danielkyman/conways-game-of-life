import React, { useState, useCallback, useRef } from "react";
import produce from "immer";
import "./sass/App.scss";

import Grid from "./components/Grid";

function App() {
  return (
    <div className="main-container">
      <Grid />
    </div>
  );
}

export default App;
