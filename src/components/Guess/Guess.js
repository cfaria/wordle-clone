import React from "react";

import { range } from  '../../utils';

function Guess(guessText) {  
  console.log(guessText);
  return <p className="guess">
      {        
        range(guessText.length).map((num) => (        
        <span className="cell" key={num}></span>
      ))}
  </p>;
}

export default Guess;
