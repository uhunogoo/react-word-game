import React from "react";

const KEYS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
     ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
          ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function getStatusByLetter(validatedGuesses) {
  const statusObj = {};

  validatedGuesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      statusObj[letter] = status;
    });
  });

  return statusObj;
}

function Keybord({ validatedGuesses }) {
  const statusByLetter = getStatusByLetter(validatedGuesses);

  return (
    <div className="keyboard">
      {
        KEYS.map((row, index) => (
          <div className="keyboard-row" key={index}>
            { row.map( letter => (
              <span 
                key={letter}
                className={`keyboard-key ${statusByLetter[letter]}`}
              >
                { letter }
              </span>
            )) }
          </div>
        ))
      }
    </div>
  );
}

export default Keybord;
