import "./App.css";
import { useState } from "react";
import ShowMovies from "./Components/ShowMovies";
import MoviePage from "./Components/MoviePage";

function App() {
  const [main, setMain] = useState(true);
  const [movie, setMovie] = useState(0);


  return (
    <div id="App">
      <h1 id="header"> Cinema Ticket System</h1>
      <div id="container">
       {main ? <ShowMovies setMain={setMain} setMovie={setMovie}/> : <MoviePage setMain={setMain} movie={movie}/>} 
      </div>
    </div>
  );
}

export default App;
