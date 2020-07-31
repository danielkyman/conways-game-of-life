import React from "react";

import "./welcome.scss";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-text-container">
      <h1>Conway's</h1>
      <h1 className="game-of-life">Game of life</h1>
      <h2>Rules:</h2>
      <ul>
        <li>1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
        <li>2. Any live cell with two or three live neighbours lives on to the next generation.</li>
        <li>3. Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
        <li>4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
      </ul>
      </div>
    </div>
  );
};

export default Welcome;
