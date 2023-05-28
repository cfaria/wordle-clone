import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

function WordInput({guessResults, setGuessResults}) {
  const [word, setWord] = React.useState('');

  return (    
    <form className="guess-input-wrapper" onSubmit={e => {
      e.preventDefault();
      
      if(word.length < 5) {
        alert('5 caracteres minimo');
        return;
      }

      if( guessResults.length >= NUM_OF_GUESSES_ALLOWED ) {
        alert('ya has hecho todos los intentos. Te jodes. :D');
        return;
      }

      setWord('');
      setGuessResults([...guessResults, word]);      
    }}>
      <label htmlFor="guess-input">Enter guess:</label>        
      <input
        id="guess-input"
        value={word}
        onChange={event => {
          if(event.target.value.length > 5) return;          
          setWord(event.target.value.toUpperCase());
        }}
        
      />
    </form>
  );
}

export default WordInput;
