import React from "react";

// Components
import Banner from "../Banner/Banner";

function WinBanner({ numOfGuesses, handlerRestar}) {
  return (
    <Banner status={ 'happy' } handlerRestar={handlerRestar}>
      <p>
        <strong>Congratulations!</strong> Got it in
        {' '}
        <strong>
          { numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
        </strong>.
      </p>
    </Banner>
  );
}

export default WinBanner;
