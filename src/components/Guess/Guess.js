import React from "react";

import { range } from  '../../utils';
import { checkGuess } from  '../../game-helpers';

function Guess({guess = '', answer = ''}) {    
  let result = [];
  if( guess.length === 0 ) {
    result = [{status:''},{status:''},{status:''},{status:''},{status:''}];
    guess = '     ';
  } else {
    result = checkGuess(guess, answer);
  }

  return <p className="guess">
      {        
        range(guess.length).map((num) => (        
        <span className={`cell ${ result[num].status }`} key={num}>{ guess[num] }</span>
      ))}
  </p>;
}

export default Guess;
