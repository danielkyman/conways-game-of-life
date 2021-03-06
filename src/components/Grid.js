import React, { useState, useCallback, useRef } from "react";
import produce from "immer";

import "./grid.scss";

import patterns from "../Patterns";

const numRows = 30;
const numCols = 30;
const evolution_time = 70;

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
};

const Grid = () => {
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid();
  });

  const [running, setRunning] = useState(false);

  const [placing, setPlacing] = useState(false);

  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });

  const [currentPattern, setCurrentPattern] = useState([]);

  const [evolutions, setEvolutions] = useState(0);

  const runningRef = useRef(running);
  runningRef.current = running;

  const placingRef = useRef(placing);
  placingRef.current = placing;

  const evolutionsRef = useRef(evolutions);
  evolutionsRef.current = evolutions;

  const handlePosition = (x, y) => {
    setCurrentPos({ x: x, y: y });
  };

  const handlePlace = (pattern) => {
    if (!placingRef.current) {
      setCurrentPattern();
      return;
    }
  };

  const handleSelect = (x, y) => {
    if (placingRef.current && currentPattern) {
      const tempGrid = produce(grid, (gridTest) => {
        for (let i = 0; i < currentPattern.length; i++) {
          let testx = x + currentPattern[i][0];
          let testy = y + currentPattern[i][1];
          gridTest[testx][testy] = grid[x][y] ? 0 : 1;
        }
      });
      setGrid(tempGrid);
    } else if (!placingRef.current) {
      const newGrid = produce(grid, (gridCopy) => {
        gridCopy[x][y] = grid[x][y] ? 0 : 1;
      });
      setGrid(newGrid);
    }
  };

  const increment = () => {
    setEvolutions((evolutionsRef.current += 1));
  };

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                neighbors += g[newI][newK];
              }
            });
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
        if (gridCopy !== grid) {
          increment();
        }
        if (gridCopy == grid) {
          setEvolutions(0);
        }
      });
    });
    setTimeout(runSimulation, evolution_time);
  }, [grid]);
  return (
    <div className="interactive-container">
      <div className="grid-left-container">
        <div className="buttons-logic">
          <button
            onClick={() => {
              setRunning(!running);
              if (!running) {
                runningRef.current = true;
                runSimulation();
              }
            }}
          >
            {running ? "stop" : "start"}
          </button>
          <button
            onClick={() => {
              const rows = [];
              for (let i = 0; i < numRows; i++) {
                rows.push(
                  Array.from(Array(numCols), () =>
                    Math.random() > 0.7 ? 1 : 0
                  )
                );
              }

              setGrid(rows);
            }}
          >
            random
          </button>
          <button
            onClick={() => {
              setGrid(generateEmptyGrid());
              setEvolutions(0);
            }}
          >
            clear
          </button>
        </div>

        <div
          className="grid"
          style={{
            //   display: "grid",
            gridTemplateColumns: `repeat(${numCols}, 20px)`,
          }}
        >
          {grid.map((rows, i) =>
            rows.map((col, k) => (
              <div
                className="grid-squares"
                key={`${i}-${k}`}
                onMouseEnter={() => {
                  handlePosition(i, k);
                }}
                onClick={() => {
                  handleSelect(i, k);
                }}
                style={{
                  // width: 20,
                  // height: 20,
                  backgroundColor: grid[i][k]
                    ? "rgba(0, 0, 0, .95)"
                    : undefined,
                  // border: "solid 1px black",
                }}
              />
            ))
          )}
        </div>
      </div>
      <div className="grid-right-container">
        <div className="buttons-patterns">
          <h2>Place a Pattern:</h2>
          <button
            className="button-block"
            onClick={() => {
              setPlacing(!placing);
              setCurrentPattern(patterns.block);
              if (!placing) {
                placingRef.current = true;
                // setCurrentPattern(patterns.block);
                handlePlace(patterns.block);
              }
            }}
          >
            {/* place block */}
          </button>
          <button
            className="button-blinker"
            onClick={() => {
              setPlacing(!placing);
              setCurrentPattern(patterns.blinker);
              if (!placing) {
                placingRef.current = true;
                // setCurrentPattern(patterns.block);
                handlePlace(patterns.blinker);
              }
            }}
          >
            {/* place blinker */}
          </button>
          <button
            className="button-oscillator"
            onClick={() => {
              setPlacing(!placing);
              setCurrentPattern(patterns.penta);
              if (!placing) {
                placingRef.current = true;
                // setCurrentPattern(patterns.block);
                handlePlace(patterns.penta);
              }
            }}
          >
            {/* place oscillator */}
          </button>
        </div>
        <div className="stats">
          <h2>
            Current Position X:{currentPos.x}, y:{currentPos.y}
          </h2>
          <h2>There have been {evolutionsRef.current} evolutions</h2>
        </div>
      </div>
    </div>
  );
};

export default Grid;
