import React from "react";
import "./Inside.css";

export default function ShowMovies({setMain, setMovie}) {
  return (
    <div>
      <h1>Please select a movie to show seats</h1>
      
<div>
    <button className="movieButton" onClick={() => {setMain(false);setMovie(1);}}> Fight Club </button>

</div>
      
    </div>
  );
}
