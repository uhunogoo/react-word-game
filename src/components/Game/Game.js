import React from 'react';

// Defaults
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Components
import Keybord from '../Keybord/Keybord';
import WinBanner from '../WinBanner/WinBanner';
import LoseBanner from '../LoseBanner/LoseBanner';
import GuessInput from '../GuessInput/GuessInput';
import GuessResult from '../GuessResult/GuessResult';


function Game() {
  // Pick a random word on every pageload
  const [ answer, setAnswer ] = React.useState(() => sample(WORDS))
  console.info({ answer })
  
  const [ gameStatus, setGameStatus ] = React.useState('running');
  const [ guesses, setGuesses ] = React.useState([]);

  function handleAddGuesses(guess) {
    const validateGuess = checkGuess(guess, answer);

    const nextItems = [...guesses, validateGuess];
    setGuesses(nextItems);
    
    if (guess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextItems.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  function handlerRestar() {
    const newWord = sample(WORDS);
    setAnswer( newWord );

    setGameStatus('running');
    setGuesses([]);
  }

  return (
    <>
      <GuessResult 
        validatedGuesses={ guesses }
      />
      <GuessInput 
        gameStatus={ gameStatus }
        handleAddGuesses={ handleAddGuesses } 
      />
      
      <Keybord validatedGuesses={ guesses } />

      { gameStatus === 'won' && (
        <WinBanner 
          numOfGuesses={guesses.length}
          handlerRestar={ handlerRestar }  
        /> 
      ) }
      { gameStatus === 'lost' && (
          <LoseBanner 
            answer={answer}
            handlerRestar={ handlerRestar }
          /> 
        ) }
    </>
  );
}

export default Game;
