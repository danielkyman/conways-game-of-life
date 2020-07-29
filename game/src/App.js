import React, { useState, useCallback, useRef } from "react";
import produce from "immer";
import "./App.css";

import Grid from "./components/Grid";

function App() {
  return (
    <div className="main">
      <Grid />
    </div>
  );
}

export default App;
