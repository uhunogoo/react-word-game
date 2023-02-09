import React from "react";

// Defaults
import { range } from "../../utils";

const Cell = ({ letter, status }) => {
  const cellClass = status ? `cell ${status}` : "cell";
  
  return (
    <span className={ cellClass }>{ letter }</span>
  );
}

function Guess({ value }) {
  return (
    <p className="guess">
      { range(5).map( num =>
        <Cell 
          key={num} 
          letter={ value ? value[num].letter : undefined } 
          status={ value ? value[num].status : undefined } 
        />
      ) }
    </p>
  );
}

export default Guess;
