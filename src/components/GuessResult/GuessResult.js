import React from "react";
import Guess from "../Guess/Guess";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResult({ validatedGuesses }) {
  return (
    <div className="guess-results">
      { range(NUM_OF_GUESSES_ALLOWED).map((num) => 
        <Guess 
          key={num} 
          value={ validatedGuesses[num] }
        />
      ) }
    </div>
  );
};

export default GuessResult;