import React from "react";

const RestartButton = ({ handlerRestar }) => {
  return (
    <button
    onClick={ handlerRestar }
    >restart</button>
  );
}

function Banner({ children, status, handlerRestar }) {
  const newClass = `banner ${ status }`;
  return (
    <div className={ newClass }>
      { children }
      <RestartButton handlerRestar={handlerRestar} />
    </div>
  );
}

export default Banner;
