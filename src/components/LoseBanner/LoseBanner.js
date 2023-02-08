import React from "react";
import Banner from "../Banner/Banner";

function LoseBanner({ answer, handlerRestar }) {
  return (
    <Banner status={ 'sad' } handlerRestar={handlerRestar}>
      <p>
        Sorry, the correct answer is <strong>{ answer }</strong>.
      </p>
    </Banner>
  );
}

export default LoseBanner;
