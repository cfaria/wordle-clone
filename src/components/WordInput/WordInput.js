import React from 'react';

function WordInput({guessResults, setGuessResults}) {
  const [word, setWord] = React.useState('');

  return (    
    <form className="guess-input-wrapper" onSubmit={e => {
      e.preventDefault();
      
      if(word.length < 5) {
        alert('5 caracteres minimo');
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
