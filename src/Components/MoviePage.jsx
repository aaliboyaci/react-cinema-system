import React, { useState } from "react";
import "./Inside.css";


const initialGrid = [
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
];



const MoviesPage = ({ setMain }) => {
  const [grid, setGrid] = useState(initialGrid);

  const handleCellClick = (rowIndex, colIndex) => {
    const updatedGrid = [...grid];
    updatedGrid[rowIndex][colIndex] = !updatedGrid[rowIndex][colIndex];
    setGrid(updatedGrid);
  };
  const handleResetGrid = () => {
    const updatedGrid = grid.map(row => row.map(() => false));
    setGrid(updatedGrid);
  };

  const countFalseValues = () => {
    let count = 0;
    grid.forEach(row => {
      row.forEach(cell => {
        if (!cell) {
          count++;
        }
      });
    });
    return count;
  };

  return (
    <div>
        <h1>Movie name: Fight Club </h1>
        <h2><b>{countFalseValues()}</b>, seats available</h2>
        <hr></hr>
        <h2> Screen</h2>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex}>
           {String.fromCharCode(64+rowIndex+1)}
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              onClick={() => handleCellClick(rowIndex, colIndex)}
              style={{
                width: "30px",
                height: "30px",
                background: cell ? "#642aab" : "#f3bdfd",
                color: cell ? "#f3bdfd" : "#642aab",
                transition: "all 0.7s",
                borderRadius: "7px",
                boxShadow: cell
                  ? " 1px  1px 10px #642aab"
                  : " 1px  1px 10px  #f3bdfd" ,
                display: "inline-block",
                margin: "4px",
                userSelect: "none",
              }}
            >
              {colIndex + 1}
            </div>
          ))}
        </div>
      ))}
      <div>
        <br/><button className="movieButton" onClick={handleResetGrid}>Clear all seats</button>
        <br></br>
        <button id ="returnButton"onClick={() => setMain(true)}> <b>Return</b></button>
      </div>
    </div>
  );
};

export default MoviesPage;
