import React from "react";

function GuessInput({ gameStatus, handleAddGuesses }) {
  const [ tentativeGuess, setTentativeGuess ] = React.useState('')
  function handleSubmit(e) {
    e.preventDefault();
    
    if (tentativeGuess.length !== 5) {
      window.alert('This word 5 letters long!');
      return;
    }

    // Add to the list and clean current 
    handleAddGuesses( tentativeGuess );
    setTentativeGuess('');
  } 

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={ handleSubmit }  
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text"
        disabled={ gameStatus !== 'running' }
        value={ tentativeGuess }
        required
        title="5 letter word"
        pattern="[a-zA-Z]{5}"
        minLength={5}
        maxLength={5}
        onChange={ (e) => {
          const formatText = e.target.value.toUpperCase();
          setTentativeGuess( formatText );
        } }
      />
    </form>
  );
}

export default GuessInput;
