import React from "react";

import Guess from "../Guess/Guess";
function GuessResults({items}) {
  return (
    <div className="guess-results">
    {
      items.map((guess, index) => (
        <Guess guessText={guess} key={index} />
      ))
    }              
  </div>
  );
}

export default GuessResults;
