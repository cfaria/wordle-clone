import React from 'react';

import GuessResults from '../GuessResults';
import WordInput from '../WordInput';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);  
  return <>
    <GuessResults items={guessResults} answer={answer} />
    <WordInput guessResults={guessResults} setGuessResults={setGuessResults} />
  </>;
}

export default Game;
