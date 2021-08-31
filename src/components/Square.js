import React, { useState, useEffect } from "react";

const Square = ({value, board, setBoard}) => {

  useEffect(() => {
    console.log("board", board);
  }, [board]);

  const onClick = () => {
    console.log("click");
    setBoard([
      ...board.slice(0,value),
      value,
      ...board.slice(value+1)
      ]
    );
  }

  return (
    <div>
      <button className="square" onClick={onClick}>
        {value}
      </button>
    </div>
  );
}
export default Square;