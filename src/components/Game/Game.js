import React from 'react';

import GuessResults from '../GuessResults';
import WordInput from '../WordInput';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import Banner from '../Banner/Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);  

  let success = false;
  
  for (let index = 0; index < guessResults.length; index++) {
    const guess = guessResults[index];
    success = answer === guess;
    if(success) {
      break;
    }
  }
  
  console.log(guessResults);

  return <>    
    <GuessResults items={guessResults} answer={answer} />
    { (! success && guessResults.length < NUM_OF_GUESSES_ALLOWED )  &&
      <WordInput guessResults={guessResults} setGuessResults={setGuessResults} />
    }

    { success &&
      <Banner count={guessResults.length} type="happy" answer={answer} />
    }

    {(! success && guessResults.length >= NUM_OF_GUESSES_ALLOWED  ) &&
      <Banner count={guessResults.length} type="sad" answer={answer} />
    }
  </>
}

export default Game;
