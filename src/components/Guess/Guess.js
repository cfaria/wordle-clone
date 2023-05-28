import React from "react";

import { range } from  '../../utils';

function Guess({guess}) {  
  if(guess.length === 0) {
    guess = '     ';
  }
  return <p className="guess">
      {        
        range(guess.length).map((num) => (        
        <span className="cell" key={num}>{guess[num]}</span>
      ))}
  </p>;
}

export default Guess;
