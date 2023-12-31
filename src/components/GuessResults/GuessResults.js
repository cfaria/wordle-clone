import React from "react";

import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from  '../../utils';

function GuessResults({items, answer}) {  
  return (
    <div className="guess-results">
    {    
      items.map((guess, index) => (
        <Guess guess={guess} answer={answer} key={index} />
      ))            
    }   
    {
      items.length < NUM_OF_GUESSES_ALLOWED && (
        range(NUM_OF_GUESSES_ALLOWED - items.length).map((num) => (
            <Guess key={num} />
          )
        )
      )
    }
    
  </div>
  );
}

export default GuessResults;
