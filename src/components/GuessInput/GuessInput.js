import React from "react";

// Defaults
import { formatText } from "../../utils";

function GuessInput({ gameStatus, handleAddGuesses }) {
  const [ userInput, setUserInput ] = React.useState('')
  function handleSubmit(e) {
    e.preventDefault();
    
    if (userInput.length !== 5) {
      window.alert('This word 5 letters long!');
      return;
    }

    // Add to the list and clean current 
    handleAddGuesses( userInput );
    setUserInput('');
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
        value={ userInput }
        required
        title="5 letter word"
        pattern="[a-zA-Z]{5}"
        minLength={5}
        maxLength={5}
        onChange={ (e) => setUserInput( formatText( e.target.value ) ) }
      />
    </form>
  );
}

export default GuessInput;
