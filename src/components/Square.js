import React, { useState, useEffect, useContext } from "react";
import { PlayGame } from '../GameProvider'

const Square = ({value}) => {
  const { gameId, board, setBoard } = PlayGame();

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